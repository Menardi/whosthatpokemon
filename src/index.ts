// Import lodash dependencies separately because it doesn't tree shake correctly if they're all
// imported directly from lodash.
import isEqual from 'lodash/isEqual';
import noop from 'lodash/noop';
import range from 'lodash/range';
import shuffle from 'lodash/shuffle';

import { NamesForPokemon, PokemonNumber, POKEMON_NAMES, removeAccents } from './pokemon';
import { LanguageId, TranslationKey, TRANSLATIONS } from './translations';
import { soundAlike } from './spelling';
import { hideElement, showElement } from './util';

const DIFFICULTY = {
    NORMAL: 0,
    ULTRA: 1,
    MASTER: 2,
    ELITE: 3,
    EASY: 4
} as const;

type DifficultyKey = keyof typeof DIFFICULTY;
type Difficulty = typeof DIFFICULTY[DifficultyKey];
type StatsPerDifficultyArray = [number, number, number, number, number];

let pendingDifficulty: Difficulty;
let imageDirectory: string | null;

type GenerationId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Generation = {
    start: number;
    end: number;
    supportedDifficulties: readonly Difficulty[];
};

// For generation selection
const GENERATIONS: { [key in GenerationId]: Generation } = {
    1: {
        start: 1,
        end: 151,
        supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    },
    2: {
        start: 152,
        end: 251,
        supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    },
    3: {
        start: 252,
        end: 386,
        supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    },
    4: {
        start: 387,
        end: 493,
        supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    },
    5: {
        start: 494,
        end: 649,
        supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    },
    6: {
        start: 650,
        end: 721,
        supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    },
    7: {
        start: 722,
        end: 807,
        supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    },
    8: {
        // Technically gen 8 starts at 810, but 808 and 809 don't have sprites, and so are closer to being gen 8
        // than gen 7 (they were introduced in Let's Go)
        start: 808,
        end: 905,
        supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    },
    9: {
        start: 906,
        end: 1025,
        supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    },
} as const;

/** How long to wait after a correct answer before showing the next Pokemon */
const SECONDS_BETWEEN_POKEMON = 3;

const ANSWER_ATTRIBUTE_NAME = 'data-answer';

let newGen: GenerationId[] = [];

/** The number of the Pokemon currently on screen. -1 if the user has reached the end of the list generated for them. */
let currentPokemonNumber: PokemonNumber | -1;
/** A dictionary which stores English, French and German names of the current Pokemon */
let currentPokemonNames: NamesForPokemon;
/** The url of the image of the Pokemon currently on screen. null if the user is in Elite mode, which is audio only. */
let currentPokemonImageUrl: string | null;
/** The url of the mp3 file of the current Pokemon's cry */
let currentPokemonSoundUrl: string;

/** Array of correct answer streaks, one entry for each difficulty. */
let correctCount: StatsPerDifficultyArray = [0, 0, 0, 0, 0];

/** Stores the number of seconds until the next Pokemon is shown, after the user has answered (or given up). */
let nextTimer = SECONDS_BETWEEN_POKEMON;
/** ID of the setInterval used to set the countdown timer after an answer. Used to clear the interval once the next
 *  Pokemon has been shown. */
let intervalId: number;

/** Timestamp of when the user was shown the current Pokemon. */
let startTime: number;
/** The time in milliseconds taken to answer the last Pokemon. -1 if it is the first Pokemon, or the user clicked
 *  I Don't Know for the last Pokemon. */
let timeTaken: number = -1;

/** True if a Pokemon image has been prepared and is ready to go for the next Pokemon. */
let hasPreparedPokemon = false;
/** The difficulty level of the prepared Pokemon. If the user changes the difficulty after the image has been
 *  prepared, but before it has been shown, they would see the wrong image. Keeping track of the prepared
 *  difficulty here allows us to discard the prepared image if it is not for the correct difficulty. */
let preparedPokemonDifficulty = -1;

/** The image loaded for the current Pokemon */
let loadedImage: HTMLImageElement;

/** Counts the number of times in a row an image has failed to load. This is used to show a message to the user
 *  to check their connection.
 */
let consecutiveLoadFails = 0;

/** Timeout ID for the image load check. If the image hasn't loaded after 3 seconds, the timeout will fire. If it
 *  has loaded in the mean time, we clear the timeout using this ID.
 */
let imageTimeoutId: number;

/** Array which stores the IDs of the Pokemon to be shown to the user, based on their selected settings. */
let shuffledPokemon: PokemonNumber[];
/** Index of the pokemonToGuess array which points to the Pokemon the user is currently guessing. */
let currentPokemonIndex: number;

/** Set to false after the main area has rendered for the first time */
let firstRender = true;

/** An object containing the most commonly accessed elements on the page, to avoid having to do query selectors
 *  all the time.
 */
let elements: {
    audioPlayer: HTMLAudioElement;
    canvas: HTMLCanvasElement;
    countdownToNextMessage: HTMLElement;
    dontKnowButton: HTMLElement;
    generationFinishedMessage: HTMLElement;
    input: HTMLInputElement;
    playArea: HTMLElement;
    settingsChangeMessage: HTMLElement;
};

const isIphone = /iPhone|iPod/.test(navigator.userAgent);

/** Timestamp representing the last date the info box at the top of the page was updated */
const LATEST_INFOBOX_TIMESTAMP = 1702659209068;
/** The key used to store the LATEST_INFOBOX_TIMESTAMP value in localStorage, after a user dismisses the info box */
const INFOBOX_LS_KEY = 'wtp_lastSeenInfobox';

type Settings = {
    difficulty: Difficulty;
    generations: GenerationId[];
    sound: boolean;
    forgivingSpelling: boolean;
    language: LanguageId;
};

type Records = {
    streaks: StatsPerDifficultyArray;
    bests: {
        time: StatsPerDifficultyArray;
        pokemonId: [PokemonNumber | 0, PokemonNumber | 0, PokemonNumber | 0, PokemonNumber | 0, PokemonNumber | 0];
    };
    totals: {
        time: StatsPerDifficultyArray;
        guesses: StatsPerDifficultyArray;
    };
};

let records: Records;

let DEFAULT_SETTINGS = {
    difficulty: DIFFICULTY.NORMAL as Difficulty,
    generations: [1, 2, 3, 4, 5, 6, 7, 8, 9] as Settings['generations'],
    sound: false,
    forgivingSpelling: false,
    language: 'en' as LanguageId,
};
let settings: Settings = { ...DEFAULT_SETTINGS };

/**
 * Initiates the page on first load
 */
const onReady = () => {
    elements = {
        audioPlayer: document.getElementById('pokemonCryPlayer') as HTMLAudioElement,
        canvas: document.getElementById('shadowImage') as HTMLCanvasElement,
        countdownToNextMessage: document.getElementById('nextCountdown') as HTMLElement,
        dontKnowButton: document.getElementById('giveAnswer') as HTMLElement,
        generationFinishedMessage: document.getElementById('generationFinishedMessage') as HTMLElement,
        input: document.getElementById('pokemonGuess') as HTMLInputElement,
        playArea: document.getElementById('playArea') as HTMLElement,
        settingsChangeMessage: document.getElementById('infoBoxMain') as HTMLElement,
    };

    const onLanguageClick = function (this: HTMLElement) {
        setLanguage(this.getAttribute('data-language') as LanguageId);
    };
    document.querySelectorAll('.languageSelector').forEach(el => el.addEventListener('click', onLanguageClick));

    const onShowMenuClick = function (this: HTMLElement) {
        document.getElementById(this.getAttribute('data-menu')!)!.classList.add('shown');
        showElement(document.querySelector('.open-menu-overlay')!);
    }
    document.querySelectorAll('.show-menu').forEach(el => el.addEventListener('click', onShowMenuClick));

    const onCloseMenuClick = function (this: HTMLElement) {
        this.parentElement!.classList.remove('shown');
        hideElement(document.querySelector('.open-menu-overlay')!);
    }
    document.querySelectorAll('.close-button').forEach(el => el.addEventListener('click', onCloseMenuClick));

    const onMenuOverlayClick = function (this: HTMLElement) {
        document.querySelectorAll('.menu.shown').forEach(el => el.classList.remove('shown'));
        hideElement(this);
    }
    document.querySelectorAll('.open-menu-overlay').forEach(el => el.addEventListener('click', onMenuOverlayClick));

    const onGenClick = function (this: HTMLElement, ev: Event) {
        ev.preventDefault();
        setGen(parseInt(this.getAttribute('data-gen')!, 10) as GenerationId);
    }
    document.querySelectorAll('.genSelect').forEach(el => el.addEventListener('click', onGenClick));

    const onDifficultyClick = function (this: HTMLElement, ev: Event) {
        ev.preventDefault();
        setDifficulty(parseInt(this.getAttribute('data-difficulty')!, 10) as Difficulty);
    }
    document.querySelectorAll('.diffSelect').forEach(el => el.addEventListener('click', onDifficultyClick));

    const onSpellingClick = function (this: HTMLElement, ev: Event) {
        ev.preventDefault();
        setForgivingSpelling(this.getAttribute('data-forgiving') === 'true');
    }
    document.querySelectorAll('.spelling-setting').forEach(el => el.addEventListener('click', onSpellingClick));

    const onSoundClick = function (this: HTMLElement, ev: Event) {
        ev.preventDefault();
        setSound(this.getAttribute('data-enabled') === 'true');
    }
    document.querySelectorAll('.sound-setting').forEach(el => el.addEventListener('click', onSoundClick));


    elements.dontKnowButton.addEventListener('click', giveAnswer);
    document.querySelectorAll('#hideInfobox').forEach(el => el.addEventListener('click', hideInfobox));

    loadState();

    maybeGenerateNewNumbers(true);

    newPokemon();

    for(let i=0; i < newGen.length; i++) {
        document.querySelector("#gen" + newGen[i])!.classList.replace('pending', 'selected');
    }

    let lastSeenInfobox = parseInt(localStorage.getItem(INFOBOX_LS_KEY) || '0', 10);
    if(
        lastSeenInfobox >= LATEST_INFOBOX_TIMESTAMP
        // If the infobox is more than 30 days old, hide it
        || Date.now() - LATEST_INFOBOX_TIMESTAMP > 2592000000
    ) {
        hideElement(document.querySelector("#infoBox")!);
    }

    elements.input.addEventListener('input', function (this: HTMLInputElement) {
        if (!this.classList.contains('correct')) {
            checkPokemonAnswer(this.value);
        } else {
            // Chrome on Android has an issue where calling ev.preventDefault() on keydown doesn't
            // prevent the value from being updated, unlike every other browser. If the user is in
            // forgiving spelling mode, it's quite possible for them to type too many characters,
            // and end up with a confusing answer. This workaround fixes the issue by setting the
            // value to the actual answer if the user types anything while in the "correct" state.
            this.value = this.getAttribute(ANSWER_ATTRIBUTE_NAME)!;
        }
    });

    // If we actually disable the input field, the keyboard goes down on
    // mobile, so instead we use a disabled class. Preventing the event on
    // keydown will essentially have the same effect as it being disabled.
    elements.input.addEventListener('keydown', function(this: HTMLInputElement, ev) {
        if (this.classList.contains('disabled')) {
            ev.preventDefault();

            if (ev.key === 'Enter') {
                newPokemon();
            }
        }
    });

    if(isIphone) {
        // Safari and Chrome on iOS shift the webview up rather than resizing
        // it when the virtual keyboard is opened. We have no way of knowing
        // for sure when the keyboard is open or what height it is. So instead
        // we assume the input being focused will bring up the keyboard, and we
        // resize the view by what is the most likely height of the keyboard.

        elements.input.addEventListener('focus', function() {
            // Wait 250ms for the keyboard opening animation to finish
            setTimeout(() => {
                if (window.visualViewport) {
                    document.body.style.height = `${window.visualViewport.height}px`;
                }

                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 250);

            _onKeyboardOpen();
        });

        elements.input.addEventListener('blur', _onKeyboardClose);
    }
};

if (document.readyState !== 'loading') {
    onReady();
} else {
    document.addEventListener('DOMContentLoaded', onReady);
}

function _onKeyboardOpen() {
    document.body.classList.add('keyboard-open');
}

function _onKeyboardClose() {
    document.body.classList.remove('keyboard-open');
    document.body.style.height = '';
}


/**
 * Set the range of numbers to generate from depending on the Pokemon Generation selected
 */
function setGen(genToAffect: GenerationId) {
    const genId = (typeof genToAffect === 'string' ? parseInt(genToAffect, 10) : genToAffect) as GenerationId;

    // Before editing gen selection, we ensure that the user is not about to remove their last gen
    if (!(newGen.length === 1 && newGen[0] === genId)) {
        // Remove all the "selected" classes and replace them with "pending" classes if it's the user's first time clicking a gen this round
        document.querySelectorAll('.selected.genSelect').forEach(el => el.classList.replace('selected', 'pending'));

        if (newGen.indexOf(genId) > -1) {
            newGen.splice(newGen.indexOf(genId), 1);
            document.getElementById(`gen${genId}`)?.classList.remove('pending');
        } else {
            newGen.push(genId);
            document.getElementById(`gen${genId}`)?.classList.add('pending');
        }

        showElement(elements.settingsChangeMessage);
    }

    // This will only happen if the user has reached the end of a generation and then changed
    // the generation. It immediately puts up a new Pokemon.
    if(currentPokemonNumber === -1) {
        maybeGenerateNewNumbers(true);
        newPokemon();
    }
}

/**
 * Sets the difficulty level, which is essentially choosing where we get the images from.
 */
function setDifficulty(selectedDifficulty: Difficulty) {
    if (selectedDifficulty == DIFFICULTY.EASY || selectedDifficulty == DIFFICULTY.NORMAL) {
        imageDirectory = 'images/artwork/';
    } else if (selectedDifficulty == DIFFICULTY.ULTRA) {
        imageDirectory = 'images/sprites/front/';
    } else if (selectedDifficulty == DIFFICULTY.MASTER) {
        imageDirectory = 'images/sprites/back/';
    } else if (selectedDifficulty == DIFFICULTY.ELITE) {
        imageDirectory = null;
    }

    if (pendingDifficulty === undefined) {
        document.getElementById(`diff${selectedDifficulty}`)!.classList.add('selected');
        settings.difficulty = selectedDifficulty;
    } else {
        document.getElementById(`diff${pendingDifficulty}`)!.classList.remove('pending');

        if(selectedDifficulty != settings.difficulty) {
            document.getElementById(`diff${selectedDifficulty}`)!.classList.add('pending');
        }

        showElement(elements.settingsChangeMessage);
    }

    pendingDifficulty = selectedDifficulty;

    // This will only happen if the user has reached the end of a generation and then changed
    // the generation. It immediately puts up a new Pokemon.
    if (currentPokemonNumber === -1) {
        maybeGenerateNewNumbers(true);
        newPokemon();
    }
}

/**
 * Sets the tolerance for bad spelling. Right now there are two settings -- exact and
 * forgiving.
 */
function setForgivingSpelling(isEnabled: boolean) {
    document.querySelectorAll('.spelling-setting').forEach(el => el.classList.remove('selected'));
    document.getElementById(`spelling-${isEnabled}`)!.classList.add('selected');

    settings.forgivingSpelling = isEnabled;
    saveState();
}

/**
 * Turns Pokemon cries on or off
 */
function setSound(isEnabled: boolean) {
    document.querySelectorAll('.sound-setting').forEach(el => el.classList.remove('selected'));
    document.getElementById(`sound-${isEnabled}`)!.classList.add('selected');

    settings.sound = isEnabled;
    saveState();
}

/**
 * Sets the language
 */
function setLanguage(l: LanguageId) {
    // Set the language variable
    if (TRANSLATIONS[l]) {
        settings.language = l;
    } else {
        return false;
    }

    // Change all the languages on the page
    document.querySelectorAll('.translatable').forEach((element) => {
        element.innerHTML = TRANSLATIONS[settings.language][element.getAttribute('data-lang') as TranslationKey];
    });

    // Highlight the flag (or text on mobile) of the selected language
    document.querySelectorAll('.languageSelector.selected').forEach(el => el.classList.remove('selected'));
    document.querySelectorAll(`.${settings.language}LanguageSelector`).forEach(el => el.classList.add('selected'));

    // Hide forgiving spelling option if the language is not english, and set the spelling option to exact
    if (l !== 'en') {
        hideElement(document.getElementById('spelling-true')!);
        setForgivingSpelling(false);
    } else {
        showElement(document.getElementById('spelling-true')!);
    }

    saveState();
}

/**
 * Remove the silhouette of the Pokemon, and show the user that they are right, if they
 * managed to guess themselves.
 */
function revealPokemon(correctlyGuessed: boolean) {
    timeTaken = new Date().getTime() - startTime;
    clearTimeout(imageTimeoutId);

    silhouette(currentPokemonImageUrl as string, 'shadowImage', false);

    if(settings.sound) {
        const audioPlayPromise = elements.audioPlayer.play();

        // Edge returns undefined here, where other browsers return a promise
        if(audioPlayPromise) {
            audioPlayPromise.catch(noop);
        }
    }

    if(correctlyGuessed) {
        // Chrome appears to have a bug where the field continues to take input after
        // the input field is disabled, so we need to check here before increasing the count.
        if(!elements.input.classList.contains('correct')) {
            elements.input.classList.add('correct');
            correctCount[settings.difficulty]++;

            // Increase the best count if it has been beaten
            if(correctCount[settings.difficulty] > records.streaks[settings.difficulty]) {
                records.streaks[settings.difficulty] = correctCount[settings.difficulty];
            }

            // Check if the best time has been beaten
            if(timeTaken < records.bests.time[settings.difficulty] || records.bests.time[settings.difficulty] === 0) {
                records.bests.time[settings.difficulty] = timeTaken;
                records.bests.pokemonId[settings.difficulty] = currentPokemonNumber as PokemonNumber;
            }

            records.totals.time[settings.difficulty] += timeTaken;
            records.totals.guesses[settings.difficulty] += 1;
        }
    } else {
        correctCount[settings.difficulty] = 0;
        timeTaken = -1;
    }

    // Should only happen once, and regardless of whether the user got it right or wrong
    if(!elements.input.classList.contains('disabled')) {
        nextCountdown();
        intervalId = setInterval(nextCountdown, 1000);
    }
    elements.input.classList.add('disabled');

    // Give the Pokemon name
    elements.input.value = currentPokemonNames[settings.language];
    // Add an attribute with the name to the input, to help work around a Chrome Android bug
    elements.input.setAttribute(ANSWER_ATTRIBUTE_NAME, elements.input.value);

    document.querySelectorAll('.currentCountText').forEach(el => el.innerHTML = correctCount[settings.difficulty].toString());
    document.querySelector('.bestCountText')!.innerHTML = records.streaks[settings.difficulty].toString();

    if(correctlyGuessed && !isNaN(timeTaken)) {
        document.querySelectorAll('.lastTimeText').forEach(el => el.innerHTML = (timeTaken / 1000).toFixed(3));
    } else {
        document.querySelectorAll('.lastTimeText').forEach(el => el.innerHTML = '-');
    }

    if(records.bests.time[settings.difficulty] !== 0) {
        document.querySelector('.bestTimeText')!.innerHTML = (records.bests.time[settings.difficulty] / 1000).toFixed(3);
    }

    if(records.bests.pokemonId[settings.difficulty] > 0) {
        document.querySelector('#bestTimePokemon')!.innerHTML = `(${getLocalPokemonName(records.bests.pokemonId[settings.difficulty] as PokemonNumber)})`;
    }

    if(records.totals.guesses[settings.difficulty] > 0) {
        let avgTime = records.totals.time[settings.difficulty] / records.totals.guesses[settings.difficulty] / 1000;
        document.querySelector('.averageTimeText')!.innerHTML = avgTime.toFixed(3);
    }

    hideElement(document.getElementById('giveAnswer')!);
    showElement(document.getElementById('nextCountdown')!)

    // Before we preload the new pokemon, we display this pokemon's other names
    showElement(document.getElementById('alsoKnownAs')!)
    for (let lang in TRANSLATIONS) {
        const el = document.getElementById(`alsoKnownAs${lang}`)!;
        if (lang !== settings.language) {
            el.innerHTML = currentPokemonNames[lang as LanguageId];
            showElement(el.parentElement!);
        } else {
            hideElement(el.parentElement!);
        }
    }

    // Update to any new settings that have been selected
    maybeGenerateNewNumbers();

    // Prepare the next Pokemon, but it won't be shown until the countdown timer completes, or the user skips
    prepareNextPokemon();
}

/**
 * Re-generates the array of Pokémon numbers, only if there is a pending generation change.
 * Set force to true to re-generate the array, regardless of whether there is a pending
 * generation change.
 */
function maybeGenerateNewNumbers(force?: boolean) {
    if(force || !isEqual(settings.generations, newGen)) {
        shuffledPokemon = [];
        currentPokemonIndex = -1;

        newGen.filter((gen) => GENERATIONS[gen].supportedDifficulties.includes(settings.difficulty))
            .forEach((genToInc) => {
            (range(GENERATIONS[genToInc].start, GENERATIONS[genToInc].end + 1)).forEach(function (pokemonNumber) {
                shuffledPokemon.push(pokemonNumber as PokemonNumber);
            });
        });

        shuffledPokemon = shuffle(shuffledPokemon);
    }
}

/** Preloads the image and audio (if sound is enabled) for the given Pokémon number */
function preloadPokemonMedia(number: PokemonNumber | -1) {
    if (number === -1) return;

    const imageUrl = getPokemonImageUrl(number);

    if (imageUrl !== null) {
        const img = new Image();
        img.src = imageUrl;
    }

    if (settings.sound) {
        const soundUrl = getPokemonSoundUrl(number);
        const audio = new Audio();
        audio.src = soundUrl;
    }
}

function preloadNextPokemonMedia() {
    preloadPokemonMedia(getNextPokemonNumber());
}

/**
 * Generates a new Pokemon and loads the image, but doesn't display it. Returns true if
 * it preloaded, false otherwise.
 */
function prepareNextPokemon() {
    currentPokemonNumber = shiftNextPokemonNumber();

    if (currentPokemonNumber !== -1) {
        currentPokemonNames = getPokemonNames(currentPokemonNumber);
        currentPokemonImageUrl = getPokemonImageUrl(currentPokemonNumber);
    } else {
        return false;
    }

    if (currentPokemonImageUrl !== null) {
        preloadPokemonMedia(currentPokemonNumber);
        hasPreparedPokemon = true;
        preparedPokemonDifficulty = settings.difficulty;
        return true;
    } else if (settings.difficulty === DIFFICULTY.ELITE) {
        // There is no image to preload, so assume success
        hasPreparedPokemon = true;
        preparedPokemonDifficulty = settings.difficulty;
        return true;
    } else {
        return false;
    }
}

/**
 * Display a new random Pokemon
 */
function newPokemon() {
    clearCanvas('shadowImage');

    // Generate a new Pokemon if one hasn't already been preloaded, or if the settings have
    // changed since the Pokemon was revealed. Don't generate new numbers if the selected
    // generation(s) have been finished, so the user can be shown the "generation finished"
    // message.
    if((!hasPreparedPokemon && currentPokemonNumber !== -1)
        || !isEqual(settings.generations, newGen)
        || (preparedPokemonDifficulty !== -1 && preparedPokemonDifficulty != pendingDifficulty)) {
        maybeGenerateNewNumbers(true);
        currentPokemonNumber = shiftNextPokemonNumber();
    }

    nextTimer = SECONDS_BETWEEN_POKEMON;
    clearInterval(intervalId);

    elements.input.classList.remove('correct', 'disabled');
    elements.input.value = '';
    elements.input.removeAttribute(ANSWER_ATTRIBUTE_NAME);

    hideElement(document.getElementById('nextCountdown')!);
    hideElement(document.getElementById('alsoKnownAs')!);
    hideElement(elements.settingsChangeMessage);

    // Save the settings and refresh the settings boxes
    updateStateAndRefreshUI();
    saveState();

    if(currentPokemonNumber === -1) {
        onGenerationFinished();
    } else {
        hasPreparedPokemon = false;

        currentPokemonNames = getPokemonNames(currentPokemonNumber);
        currentPokemonImageUrl = getPokemonImageUrl(currentPokemonNumber);
        currentPokemonSoundUrl = getPokemonSoundUrl(currentPokemonNumber);

        showElement(document.getElementById('giveAnswer')!);

        // Now load the next Pokemon
        if(currentPokemonImageUrl !== null) {
            let shouldSilhouette = settings.difficulty != DIFFICULTY.EASY;
            silhouette(currentPokemonImageUrl, 'shadowImage', shouldSilhouette);
            imageTimeoutId = setTimeout(checkPokemonLoaded, 3000);
        }

        elements.audioPlayer.src = currentPokemonSoundUrl;
        if(settings.difficulty == DIFFICULTY.ELITE) {
            const audioPlayPromise = elements.audioPlayer.play();

            if(audioPlayPromise) {
                audioPlayPromise.catch(noop);
            }
        }

        // This will get set again on loading of the silhouette, but we need to specify it here
        // so we have a timer for non-image guessing
        startTime = new Date().getTime();

        showMain();

        if(document.body.classList.contains('keyboard-open')) {
            _onKeyboardOpen();
        }

        // Preload the next Pokemon so users skipping the countdown don't have to wait for it to load later
        setTimeout(preloadNextPokemonMedia, 500);
    }
}



/**
 * Shows a message to the user if they have completed the entire generation
 */
function onGenerationFinished() {
    showElement(elements.generationFinishedMessage);
    hideMain();
}

/**
 * Hide the playing area
 */
function hideMain() {
    hideElement(elements.playArea);
    hideElement(elements.settingsChangeMessage);
    showElement(elements.generationFinishedMessage);
}

/**
 * Show the playing area
 */
function showMain() {
    // playArea is block on desktop, and flex on mobile, so set to an empty string to revert to original CSS
    showElement(elements.playArea, '');
    hideElement(elements.generationFinishedMessage);

    if(!firstRender) {
        elements.input.focus();
    } else {
        firstRender = false;
    }
}

/**
 * Checks to see if the Pokemon image has been loaded. If not, a link is offered to try to
 * load another.
 */
function checkPokemonLoaded() {
    if(!loadedImage.complete || loadedImage.naturalWidth == 0 || loadedImage.naturalHeight == 0) {
        if(++consecutiveLoadFails < 3) {
            elements.countdownToNextMessage.setAttribute('data-lang', 'loadfail');
            elements.countdownToNextMessage.innerHTML = TRANSLATIONS[settings.language].loadfail;
        } else {
            elements.countdownToNextMessage.setAttribute('data-lang', 'slowconn');
            elements.countdownToNextMessage.innerHTML = TRANSLATIONS[settings.language].slowconn;
        }

        showElement(elements.countdownToNextMessage);
        elements.countdownToNextMessage.querySelector('#loadNewPokemonCta')?.addEventListener('click', (ev) => {
            ev.preventDefault();
            newPokemon();
        })
    } else {
        consecutiveLoadFails = 0;
    }
}

/**
 * Refreshes the streak and time counters, as well as the generation and difficulty links,
 * if a new one has been selected. Also does some more advanced stuff, like showing the
 * sound player for higher difficulties.
 */
function updateStateAndRefreshUI() {
    // Checks to see if the generation selection has changed
    if(!isEqual(settings.generations, newGen)) {
        document.querySelectorAll('.genSelect').forEach(el => el.classList.remove('pending', 'selected'));

        settings.generations.length = 0;

        // Add current to all of our selected generations and push them into current Gen
        for(let i=0; i < newGen.length; i++) {
            document.getElementById(`gen${newGen[i]}`)?.classList.add('selected');
            settings.generations.push(newGen[i]);
        }
    } else if (document.querySelectorAll('.genSelect.pending').length > 0) {
        // In the case that the user began to change the generation and then changed their mind,
        // we switch the generations back to current
        document.querySelectorAll('.genSelect.pending').forEach(el => {
            el.classList.toggle('pending');
            el.classList.toggle('selected');
        });
    }


    if(pendingDifficulty != settings.difficulty) {
        // The difficulty has been updated, so highlight the new one
        document.querySelectorAll('.diffSelect').forEach(el => el.classList.remove('pending', 'selected'));
        document.getElementById(`diff${pendingDifficulty}`)?.classList.add('selected');

        // Show the info box explaining that the change means different streaks and times
        showElement(document.getElementById('infoBoxRight')!);
        settings.difficulty = pendingDifficulty;
    } else {
        hideElement(document.getElementById('infoBoxRight')!);
    }

    if(settings.difficulty == DIFFICULTY.ELITE) {
        showElement(elements.audioPlayer);
        hideElement(elements.canvas);
        setSound(true);
    } else {
        showElement(elements.canvas);
        hideElement(elements.audioPlayer);
    }

    document.querySelector('.bestCountText')!.innerHTML = records.streaks[settings.difficulty].toString();
    document.querySelector('.currentCountText')!.innerHTML = correctCount[settings.difficulty].toString();

    if (records.bests.pokemonId[settings.difficulty] > 0) {
        document.querySelector('#bestTimePokemon')!.innerHTML = `(${getLocalPokemonName(records.bests.pokemonId[settings.difficulty] as PokemonNumber)})`;
    } else {
        document.querySelector('#bestTimePokemon')!.innerHTML = '';
    }

    if (records.bests.time[settings.difficulty] === -1) {
        document.querySelector('.bestTimeText')!.innerHTML = '-';
    } else {
        document.querySelector('.bestTimeText')!.innerHTML = (records.bests.time[settings.difficulty] / 1000).toString();
    }

    if (records.totals.guesses[settings.difficulty] > 0) {
        let avgTime = records.totals.time[settings.difficulty] / records.totals.guesses[settings.difficulty] / 1000;
        document.querySelector('.averageTimeText')!.innerHTML = avgTime.toFixed(3);
    } else {
        document.querySelector('.averageTimeText')!.innerHTML = '-';
    }

    if (timeTaken === -1) {
        document.querySelectorAll('.lastTimeText').forEach(el => el.innerHTML = '-');
    } else {
        document.querySelectorAll('.lastTimeText')!.forEach(el => el.innerHTML = (timeTaken / 1000).toFixed(3));
    }
}

/**
 * Wipes the canvas clean. This is useful if a Pokemon is slow to load, as we don't
 * want the previous Pokemon still there while the other is loading -- that's confusing to the user.
 */
function clearCanvas(canvasId: string) {
    const canvas = <HTMLCanvasElement> document.getElementById(canvasId);
    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function silhouette(
    imageUrl: string,
    canvasId: string,
    /** Set this to true to actually do the silhouette. If false, the image
     *  will be drawn directly to the canvas without silhouetting it. */
    doSilhouette: boolean,
) {

    if(imageUrl === null)
        return false;

    const canvas = <HTMLCanvasElement> document.getElementById(canvasId);
    const ctx = canvas.getContext('2d')!;

    loadedImage = new Image();

    loadedImage.src = imageUrl;

    loadedImage.onload = function() {
        // On higher difficulties, the images are smaller. This makes them bigger.
        if(loadedImage.width <= 100) {
            canvas.width = loadedImage.width * 4;
            canvas.height = loadedImage.height * 4;
        } else {
            canvas.width = loadedImage.width;
            canvas.height = loadedImage.height;
        }

        ctx.drawImage(loadedImage, 0, 0, canvas.width, canvas.height);

        if(doSilhouette) {
            let rawImage = ctx.getImageData(0,0,canvas.width,canvas.height);

            for (let i=0; i<rawImage.data.length;i+=4) {
                if(rawImage.data[i+3] >= 100) {
                    rawImage.data[i] = 30;
                    rawImage.data[i+1] = 30;
                    rawImage.data[i+2] = 30;
                    rawImage.data[i+3] = 255;
                } else {
                    rawImage.data[i+3] = 0;
                }
            }

            ctx.putImageData(rawImage,0,0);
        }

        startTime = new Date().getTime();
    };
}

/**
 * Displays a countdown to the next Pokemon
 */
function nextCountdown() {
    if(nextTimer > 0) {
        let countdownMessage: string = TRANSLATIONS[settings.language].nextpokemon;
        elements.countdownToNextMessage.innerHTML = countdownMessage.replace('_TIME_', nextTimer.toString());
        nextTimer--;
    } else {
        newPokemon();
    }
}

/**
 * Give the answer if the user has given up.
 */
function giveAnswer() {
    if (elements.input === document.activeElement) {
        window.requestAnimationFrame(function() {
            elements.input.focus();
        });
    }
    revealPokemon(false);
}

function getNextPokemonNumber(): PokemonNumber | -1 {
    let number;
    const nextPokemonIndex = currentPokemonIndex + 1;
    if(nextPokemonIndex >= shuffledPokemon.length || shuffledPokemon.length === 0) {
        number = -1;
    } else {
        number = shuffledPokemon[nextPokemonIndex];
    }
    return number as PokemonNumber | -1;
}

/**
 * Gets the next Pokémon number from the array, and moves the pointer onwards (similar to a shift operation on an array)
 */
function shiftNextPokemonNumber(): PokemonNumber | -1 {
    const number = getNextPokemonNumber();
    currentPokemonIndex += 1;
    return number;
}

/**
 * Get the names of a Pokemon, given the number. The array of names starts at 0, so we need to
 * subtract 1 from the given number to get the right name.
 */
function getPokemonNames(number: PokemonNumber): NamesForPokemon {
    return POKEMON_NAMES.find((pokemon) => pokemon.number === number)!.names;
}

function getLocalPokemonName(number: PokemonNumber): string {
    return getPokemonNames(number)[settings.language];
}

/**
 * Get the URL of the Pokemon image. The format is 123.png. On failure, it returns false.
 */
function getPokemonImageUrl(number: PokemonNumber) {
    if(imageDirectory !== null)
        return imageDirectory + number + '.png';
    else
        return null;
}

/**
 * Get the URL of the Pokemon cry. The format is 123.mp3.
 */
function getPokemonSoundUrl(number: PokemonNumber) {
    return 'sounds/cries/' + number + '.mp3';
}

/**
 * Check to see if the guess equals the answer in any language. If it does, reveal the Pokemon, else return false.
 */
function checkPokemonAnswer(typedGuess: string) {
    let guess = removeAccents(typedGuess.toLowerCase());

    if (settings.language === 'en' && settings.forgivingSpelling && soundAlike(guess, currentPokemonNames.en) ) {
        revealPokemon(true);
    } else if(guess == removeAccents(currentPokemonNames[settings.language])) {
        revealPokemon(true);
    }
}

/**
 * Hide the infobox that shows update messages
 */
function hideInfobox() {
    hideElement(document.getElementById('infoBox')!);
    localStorage.setItem(INFOBOX_LS_KEY, LATEST_INFOBOX_TIMESTAMP.toString());
}

/**
 * Save and load user settings and records
 */
const SETTINGS_LS_KEY = 'wtp_settings';
const RECORDS_LS_KEY = 'wtp_records';
function loadState() {
    const lsSettings = localStorage.getItem(SETTINGS_LS_KEY);

    if(lsSettings) {
        settings = JSON.parse(lsSettings);
    } else {
        settings = { ...DEFAULT_SETTINGS };
    }

    settings.generations.forEach(function(generation) {
        setGen(generation);
    });
    setDifficulty(settings.difficulty);
    setSound(settings.sound);
    setForgivingSpelling(settings.forgivingSpelling);
    setLanguage(settings.language);

    const lsRecords = localStorage.getItem(RECORDS_LS_KEY);

    if(lsRecords) {
        records = JSON.parse(lsRecords)
    } else {
        records = _getDefaultRecordsObj();
    }
}

function saveState() {
    if(settings) localStorage.setItem(SETTINGS_LS_KEY, JSON.stringify(settings));
    if(records) localStorage.setItem(RECORDS_LS_KEY, JSON.stringify(records));
}

// In a function so that we return a new instance of the object every time. Avoids
// accidentally sharing the arrays between the default and actual records object.
function _getDefaultRecordsObj(): Records {
    return {
        streaks: [0, 0, 0, 0, 0],
        bests: {
            time: [0, 0, 0, 0, 0],
            pokemonId: [0, 0, 0, 0, 0]
        },
        totals: {
            time: [0, 0, 0, 0, 0],
            guesses: [0, 0, 0, 0, 0]
        }
    };
}
