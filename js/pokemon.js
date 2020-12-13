/*
 * pokemon.js
 *
 * All in-game functionality is in this file
 */

// Initialise some variables
var currentPokemonNumber;
var currentPokemonNames = {}; // a dictionary which stores English, French and German names of the current Pokemon
var currentPokemonImageUrl;

// For Pokemon cries
var currentPokemonSoundUrl;

// Used for difficulty setting
var DIFFICULTY = {
    UNSET: -1,
    NORMAL: 0,
    ULTRA: 1,
    MASTER: 2,
    ELITE: 3,
    EASY: 4
};
var pendingDifficulty = DIFFICULTY.UNSET;
var imageDirectory;

// For generation selection
var newGen = [];
var allGenerations = {
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
        end: 898,
        supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    },
};


// To count streaks
var correctCount = [0, 0, 0, 0, 0];

// For countdown timer after a correct answer
var nextTimer = 3;
var intervalId;

// For timing how long an answer takes
var startTime;
var timeTaken = '-';

// Set if a Pokemon image has been preloaded
var pokemonPreloaded = false;
var preloadedDifficulty = -1;

// This will store the current image loaded
var loadedImage;

// Counts the number of times in a row an image has failed to load
var consecutiveLoadFails = 0;

// Will be used to hold the ID of the image loading timeout so it can be disabled if necessary
var imageTimeoutId;

// Will be used as an array to store upcoming Pokemon
var upcomingPokemon;
var upcomingPokemonArrayPos;

var firstRender = true;

var $els;

var IPHONE_KEYBOARD_HEIGHT = 216;

var isIphone = /iPhone|iPod/.test(navigator.userAgent);

var LATEST_INFOBOX = 20200413;
var INFOBOX_LS_KEY = 'wtp_lastSeenInfobox';


var settings = {};
var records;
var DEFAULT_SETTINGS = {
    difficulty: DIFFICULTY.NORMAL,
    generations: [1, 2, 3, 4, 5, 6, 7, 8],
    sound: false,
    forgivingSpelling: false,
    language: 'en'
};


/*
 * Initiates the page on first load
 */

$(document).ready(function() {
    // Cache all the DOM elements we use here
    // TODO: Use these cached elements everywhere instead of selectors
    $els = {
        window: $(window),
        body: $(document.body),
        playArea: $('#playArea'),
        infoMessage: $('#infoMessage'),
        canvasContainer: $('#canvasContainer'),
        canvas: $('canvas'),
        audioPlayer: $('#pokemonCryPlayer'),
        input: $('#pokemonGuess'),
        dontKnowButton: $('#giveAnswer'),
        openMenuOverlay: $('.open-menu-overlay'),
        hideInfoboxButton: $('#hideInfobox')
    };

    // Event listeners first
    $('.languageSelector').on('click', function() {
        setLanguage($(this).data('language'), true);
    });

    $('.show-menu').on('click', function(ev) {
        $('#' + $(ev.currentTarget).data('menu')).addClass('shown');
        $els.openMenuOverlay.show();
    });

    $('.close-button').on('click', function(ev) {
        $(ev.currentTarget).parent().removeClass('shown');
        $els.openMenuOverlay.hide();
    });

    $els.openMenuOverlay.on('click', function() {
        $('.menu.shown').removeClass('shown');
        $els.openMenuOverlay.hide();
    });

    $els.dontKnowButton.on('click', giveAnswer);
    $els.hideInfoboxButton.on('click', hideInfobox);

    loadState();

    generateNewNumbers(true);

    newPokemon();

    for(var i=0; i < newGen.length; i++) {
        $("#gen" + newGen[i]).removeClass("pending").addClass("selected");
    }

    var lastSeenInfobox = localStorage.getItem(INFOBOX_LS_KEY);
    if(lastSeenInfobox >= LATEST_INFOBOX) {
        $("#infoBox").hide();
    }

    var previousWindowHeight = window.innerHeight;

    $els.window.on('resize', function() {
        var newWindowHeight = window.innerHeight;
        var heightChange = newWindowHeight - previousWindowHeight;

        if(heightChange < -100) {
            _onKeyboardOpen();
        } else if(heightChange > 100) {
            _onKeyboardClose();
        }

        previousWindowHeight = newWindowHeight;
    });

    $els.input.on('input', function(ev) {
        checkPokemonAnswer(ev.target.value);
    });

    // If we actually disable the input field, the keyboard goes down on
    // mobile, so instead we use a disabled class. Preventing the event on
    // keydown will essentially have the same effect as it being disabled.
    $els.input.on('keydown', function(ev) {
        if(ev.target.classList.contains('disabled')) {
            ev.preventDefault();
        }
    });

    if(isIphone) {
        // Safari and Chrome on iOS shift the webview up rather than resizing
        // it when the virtual keyboard is opened. We have no way of knowing
        // for sure when the keyboard is open or what height it is. So instead
        // we assume the input being focused will bring up the keyboard, and we
        // resize the view by what is the most likely height of the keyboard.
        // It won't be perfectly aligned but it's better than nothing.

        $els.input.on('focus', function() {
            $els.body.css('height', 'calc(100% - ' + IPHONE_KEYBOARD_HEIGHT + 'px)');
            $els.body.scrollTop(0);

            _onKeyboardOpen();
        });

        $els.input.on('blur', _onKeyboardClose);
    }
});

function _onKeyboardOpen() {
    $els.body.addClass('keyboard-open');
}

function _onKeyboardClose() {
    $els.body.removeClass('keyboard-open')
    $els.body.css('height', '');
    $els.canvas.css('height', '');
}


/*
 * Set the range of numbers to generate from depending on the Pokemon Generation selected
 */

function setGen(genToAffect) {
    genToAffect = parseInt(genToAffect);

    // Before editing gen selection, we ensure that the user is not about to remove their last gen
    if (!(newGen.length === 1 && newGen[0] === genToAffect)) {
        // Remove all the "selected" classes and replace them with "pending" classes if it's the user's first time clicking a gen this round
        $('.selected.genSelect').removeClass('selected').addClass('pending');

        if (newGen.indexOf(genToAffect) > -1) {
            newGen.splice(newGen.indexOf(genToAffect), 1);
            $("#gen" + genToAffect).removeClass("pending");
        } else {
            newGen.push(genToAffect);
            $("#gen" + genToAffect).addClass("pending");
        }

        $('#infoBoxMain').show();
    }

    // This will only happen if the user has reached the end of a generation and then changed
    // the generation. It immediately puts up a new Pokemon.
    if(currentPokemonNumber === -1) {
        generateNewNumbers(true);
        newPokemon();
    }
}

/*
 * Sets the difficulty level, which is essentially choosing where we get the images from.
 */

function setDifficulty(selectedDifficulty) {
    if (selectedDifficulty == DIFFICULTY.EASY || selectedDifficulty == DIFFICULTY.NORMAL) {
        imageDirectory = 'images/artwork/';
    } else if (selectedDifficulty == DIFFICULTY.ULTRA) {
        imageDirectory = 'images/sprites/front/';
    } else if (selectedDifficulty == DIFFICULTY.MASTER) {
        imageDirectory = 'images/sprites/back/';
    } else if (selectedDifficulty == DIFFICULTY.ELITE) {
        imageDirectory = null;
    }

    if (pendingDifficulty == DIFFICULTY.UNSET) {
        $('#diff' + selectedDifficulty).addClass('selected');
        settings.difficulty = selectedDifficulty;
    } else {
        $('#diff' + pendingDifficulty).removeClass('pending');

        if(selectedDifficulty != settings.difficulty) $('#diff' + selectedDifficulty).addClass('pending');

        $('#infoBoxMain').show();
    }

    pendingDifficulty = selectedDifficulty;
}


/*
 * Sets the tolerance for bad spelling. Right now there are two settings -- exact and
 * forgiving.
 */

function setForgivingSpelling(isEnabled) {
    $('.spelling-setting').removeClass('selected');
    $('#spelling-' + isEnabled).addClass('selected');

    settings.forgivingSpelling = isEnabled;
    saveState();
}



/*
 * Turns Pokemon cries on or off
 */

function setSound(isEnabled) {
    $('.sound-setting').removeClass('selected');
    $('#sound-' + isEnabled).addClass('selected');

    settings.sound = isEnabled;
    saveState();
}



/*
 * Sets the language
 */

function setLanguage(l, changedByUser) {
    // Set the language variable
    if (window.lang[l]) {
        settings.language = l;
    } else {
        return false;
    }

    // Change all the languages on the page
    $('.translatable').each(function() {
        $(this).html(window.lang[settings.language][$(this).data('lang')]);
    });

    // Highlight the flag of the selected language
    $('.languageSelector.selected').removeClass('selected');
    $('.' + settings.language + 'LanguageSelector').addClass('selected');

    // Hide forgiving spelling option if the language is not english, and set the spelling option to exact
    if (l !== 'en') {
        $('#spelling-true').hide();
        setForgivingSpelling(false);
    } else {
        $('#spelling-true').show();
    }

    saveState();

    if(changedByUser) {
        if(window.ga) window.ga('send', 'event', 'Language', l);
    }
}

/*
 * Remove the silhouette of the Pokemon, and show the user that they are right, if they
 * managed to guess themselves.
 */

function revealPokemon(correctlyGuessed) {
    timeTaken = new Date().getTime() - startTime;
    clearTimeout(imageTimeoutId);

    silhouette(currentPokemonImageUrl, 'shadowImage', false);

    if(settings.sound == 1) {
        var audioPlayPromise = $els.audioPlayer.get(0).play();

        // Edge returns undefined here, where other browsers return a promise
        if(audioPlayPromise) {
            audioPlayPromise.catch(_.noop);
        }
    }

    if(correctlyGuessed) {
        /*
         * Chrome appears to have a bug where the field continues to take input after
         * the input field is disabled, so we need to check here before increasing the count.
         */
        if(!$els.input.hasClass('correct')) {

            $els.input.addClass('correct');
            correctCount[settings.difficulty]++;

            // Increase the best count if it has been beaten
            if(correctCount[settings.difficulty] > records.streaks[settings.difficulty]) {
                records.streaks[settings.difficulty] = correctCount[settings.difficulty];
            }

            // Check if the best time has been beaten
            if(timeTaken < records.bests.time[settings.difficulty] || records.bests.time[settings.difficulty] == '-') {
                records.bests.time[settings.difficulty] = timeTaken;
                records.bests.pokemonId[settings.difficulty] = currentPokemonNumber;
            }

            records.totals.time[settings.difficulty] += timeTaken;
            records.totals.guesses[settings.difficulty] += 1;

        }

        trackCurrentPokemon(1);
    } else {
        trackCurrentPokemon(0);
        correctCount[settings.difficulty] = 0;
        timeTaken = '-';
    }

    // Should only happen once, and regardless of whether the user got it right or wrong
    if(!$els.input.hasClass('disabled')) {
        nextCountdown();
        intervalId = setInterval(nextCountdown, 1000);
    }
    $els.input.addClass('disabled');

    // Give the Pokemon name
    $els.input.val(currentPokemonNames[settings.language]);

    $('.currentCountText').html(correctCount[settings.difficulty]);
    $('.bestCountText').html(records.streaks[settings.difficulty]);

    if(correctlyGuessed && !isNaN(timeTaken))
        $('.lastTimeText').html(timeTaken/1000);
    else
        $('.lastTimeText').html('-');

    if(records.bests.time[settings.difficulty] != '-')
        $('.bestTimeText').html(records.bests.time[settings.difficulty]/1000);

    if(records.bests.pokemonId[settings.difficulty] > 0)
        $('.bestTimePokemon').html('(' + getLocalPokemonName(records.bests.pokemonId[settings.difficulty]) + ')');

    if(records.totals.guesses[settings.difficulty] > 0) {
        var avgTime = records.totals.time[settings.difficulty] / records.totals.guesses[settings.difficulty] / 1000;
        $('.averageTimeText').html(avgTime.toFixed(3));
    }

    $els.dontKnowButton.hide();
    $("#nextCountdown").show();

    // Before we preload the new pokemon, we display this pokemon's other names
    $("#alsoKnownAs").show();
    for (var l in window.lang) {
        var $el = $('#alsoKnownAs' + l);
        if (l !== settings.language) {
            $el.html(currentPokemonNames[l]);
            $el.parent().show();
        } else {
            $el.parent().hide();
        }
    }

    // Update to any new settings that have been selected
    generateNewNumbers();

    // Preload the next Pokemon
    preloadPokemon();

}



/*
 * Creates a new random array of Pokemon numbers if the selected generation has changed.
 * The force parameter will ignore the check for a generation change.
 */

function generateNewNumbers(force) {
    if(force || !_.isEqual(settings.generations, newGen)) {
        upcomingPokemon = [];
        upcomingPokemonArrayPos = 0;

        newGen.filter(function(gen) { return allGenerations[gen].supportedDifficulties.includes(settings.difficulty); })
            .forEach(function(genToInc) {
            (_.range(allGenerations[genToInc].start, allGenerations[genToInc].end + 1)).forEach(function (pokemonNumber) {
                upcomingPokemon.push(pokemonNumber);
            });
        });

        upcomingPokemon = _.shuffle(upcomingPokemon);
    }

}

/*
 * Generates a new Pokemon and loads the image, but doesn't display it. Returns true if
 * it preloaded, false otherwise.
 */

function preloadPokemon() {
    currentPokemonNumber = getRandomPokemonNumber();

    if(currentPokemonNumber > 0) {
        currentPokemonNames = getPokemonNames(currentPokemonNumber);
        currentPokemonImageUrl = getPokemonImageUrl(currentPokemonNumber);
    } else {
        return false;
    }

    if(currentPokemonImageUrl !== null) {
        var img = new Image();
        img.src = currentPokemonImageUrl;
        pokemonPreloaded = true;
        preloadedDifficulty = settings.difficulty;
        return true;
    } else {
        return false;
    }
}



/*
 * Display a new random Pokemon
 */

function newPokemon() {

    clearCanvas('shadowImage');

    /*
     * Generate a new Pokemon if one hasn't already been preloaded, or if the settings have
     * changed since the Pokemon was revealed.
     */
    if(!pokemonPreloaded || !_.isEqual(settings.generations, newGen) || preloadedDifficulty != pendingDifficulty) {
        currentPokemonNumber = getRandomPokemonNumber();
    }

    nextTimer = 3;
    clearInterval(intervalId);

    $els.input.removeClass('correct disabled').val('');

    $('#nextCountdown').hide();
    $('#alsoKnownAs').hide();
    $('#infoBoxMain').hide();

    // Save the settings and refresh the settings boxes
    updateStateAndRefreshUI();
    saveState();

    if(currentPokemonNumber < 0) {
        generationFinished();
    } else {
        pokemonPreloaded = false;

        currentPokemonNames = getPokemonNames(currentPokemonNumber);
        currentPokemonImageUrl = getPokemonImageUrl(currentPokemonNumber);
        currentPokemonSoundUrl = getPokemonSoundUrl(currentPokemonNumber);

        $els.dontKnowButton.show();

        // Now load the next Pokemon
        if(currentPokemonImageUrl !== null) {
            var shouldSilhouette = settings.difficulty != DIFFICULTY.EASY;
            silhouette(currentPokemonImageUrl, 'shadowImage', shouldSilhouette);
            imageTimeoutId = setTimeout(checkPokemonLoaded, 3000);
        }

        $els.audioPlayer.attr('src', currentPokemonSoundUrl);
        if(settings.difficulty == DIFFICULTY.ELITE) {
            var audioPlayPromise = $els.audioPlayer.get(0).play();

            if(audioPlayPromise) {
                audioPlayPromise.catch(_.noop);
            }
        }

        /*
         * This will get set again on loading of the silhouette, but we need to specify it here
         * so we have a timer for non-image guessing
         */
        startTime = new Date().getTime();

        showMain();

        if($els.body.hasClass('keyboard-open')) {
            _onKeyboardOpen();
        }
    }

}



/*
 * Shows a message to the user if they have completed the entire generation
 */

function generationFinished() {
    var message = '<p>There are no Pokémon left! Why not try different generation settings?</p>';
    var messageDiv = document.getElementById('infoMessage');
    messageDiv.innerHTML = message;
    messageDiv.setAttribute('style', 'display: inherit');
    hideMain();
}

/*
 * Hide the playing area
 */
function hideMain() {
    $els.playArea.hide();
    $els.infoMessage.show();
    $('#infoBoxMain').hide();
}

/*
 * Show the playing area
 */
function showMain() {
    $els.playArea.show();
    $els.infoMessage.hide();

    if(!firstRender) {
        $('#pokemonGuess').focus();
    } else {
        firstRender = false;
    }
}

/*
 * Checks to see if the Pokemon image has been loaded. If not, a link is offered to try to
 * load another.
 */

function checkPokemonLoaded() {
    if(!loadedImage.complete || loadedImage.naturalWidth == 0 || loadedImage.naturalHeight == 0) {
        if(++consecutiveLoadFails < 3) {
            $('#nextCountdown').data("lang", "loadfail");
            $('#nextCountdown').html(window.lang[settings.language].loadfail);
        } else {
            $('#nextCountdown').data("lang", "slowconn");
            $('#nextCountdown').html(window.lang[settings.language].slowconn);
        }

        $('#nextCountdown').show();
    } else {
        consecutiveLoadFails = 0;
    }
 }



/*
 * Refreshes the streak and time counters, as well as the generation and difficulty links,
 * if a new one has been selected. Also does some more advanced stuff, like showing the
 * sound player for higher difficulties.
 */

function updateStateAndRefreshUI() {
    // Checks to see if the generation selection has changed
    if(!_.isEqual(settings.generations, newGen)) {
        $('.genSelect').removeClass('pending selected');

        settings.generations.length = 0;

        //Add current to all of our selected generations and push them into current Gen
        for(var i=0; i < newGen.length; i++) {
            $('#gen' + newGen[i]).addClass('selected');
            settings.generations.push(newGen[i]);
        }
    } else if ($('.genSelect').hasClass('pending')) {
        // In the case that the user began to change the generation and then changed their mind,
        // we switch the generations back to current
        $('.genSelect.selected').toggleClass('pending selected');
    }


    if(pendingDifficulty != settings.difficulty) {
        // The difficulty has been updated, so highlight the new one
        $(".diffSelect").removeClass("pending selected");
        $("#diff" + pendingDifficulty).addClass("selected");

        // Show the info box explaining that the change means different streaks and times
        $("#infoBoxRight").show();
        settings.difficulty = pendingDifficulty;
    } else {
        $("#infoBoxRight").hide();
    }

    if(settings.difficulty == DIFFICULTY.ELITE) {
        $els.audioPlayer.show();
        $els.canvas.hide();
        setSound(true);
    } else {
        $els.canvas.show();
        $els.audioPlayer.hide();
    }

    $('.bestCountText').html(records.streaks[settings.difficulty]);
    $('.currentCountText').html(correctCount[settings.difficulty]);

    if (records.bests.pokemonId[settings.difficulty] > 0) {
        $('.bestTimePokemon').html('(' + getLocalPokemonName(records.bests.pokemonId[settings.difficulty]) + ')');
    } else {
        $('.bestTimePokemon').html('');
    }

    if (records.bests.time[settings.difficulty] == '-') {
        $('.bestTimeText').html('-');
    } else {
        $('.bestTimeText').html(records.bests.time[settings.difficulty]/1000);
    }

    if (records.totals.guesses[settings.difficulty] > 0) {
        var avgTime = records.totals.time[settings.difficulty] / records.totals.guesses[settings.difficulty] / 1000;
        $('.averageTimeText').html(avgTime.toFixed(3));
    } else {
        $('.averageTimeText').html('-');
    }

    if (timeTaken == '-') {
        $('.lastTimeText').html('-');
    } else {
        $('.lastTimeText').html(timeTaken/1000);
    }

}



/*
 * Wipes the canvas clean. This is useful if a Pokemon is slow to load, as we don't
 * want the previous Pokemon still there while the other is loading -- that's confusing to the user.
 */

function clearCanvas(canvasId) {
    var canvas = document.getElementById(canvasId),
        ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


/*
 * Function: silhouette
 * Description: Creates a silhouette from a given image URL and draws it to a given canvas. For
 *              this to work properly, the image must have transparency of some sort.
 * Parameters:  imageURL: URL of the image to load
 *              canvasId: The ID of the canvas to which the new image will be drawn
 *              doSilhouette: Set this to true to actually do the silhouette. If false, the image
 *                            will be drawn directly to the canvas without silhouetting it. This
 *                            is useful if you want to do some sort of click-to-reveal functionality.
 * Returns: None
 */

function silhouette(imageUrl, canvasId, doSilhouette) {

    if(imageUrl === null)
        return false;

    var canvas = document.getElementById(canvasId),
        ctx = canvas.getContext('2d');

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
            var rawImage = ctx.getImageData(0,0,canvas.width,canvas.height);

            for (var i=0; i<rawImage.data.length;i+=4) {
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



/*
 * Displays a countdown to the next Pokemon
 */

function nextCountdown() {
    if(nextTimer > 0) {
        var countdownMessage = window.lang[settings.language].nextpokemon;
        countdownMessage = countdownMessage.replace('_TIME_', nextTimer);
        $('#nextCountdown').html(countdownMessage);
        nextTimer--;
    } else {
        newPokemon();
    }
}



/*
 * Give the answer if the user has given up.
 */

function giveAnswer() {
    if($els.input.get(0) === document.activeElement) {
        window.requestAnimationFrame(function() {
            $els.input.focus();
        });
    }
    revealPokemon(false);
}


/*
 * Sort of a relic from when the number was randomly generated on demand. Still useful to
 * have to return a number from the randomised array.
 */

function getRandomPokemonNumber() {
    var number;
    if(upcomingPokemonArrayPos > upcomingPokemon.length || upcomingPokemon.length === 0) {
        number = -1;
    } else {
        number = upcomingPokemon[upcomingPokemonArrayPos++];
    }
    return number;
}



/*
 * Get the names of a Pokemon, given the number. The array of names starts at 0, so we need to
 * subtract 1 from the given number to get the right name.
 */

function getPokemonNames(number) {
    var pokemon = window.pokemonNames.find(function(pokemon) { return pokemon.number === number });
    return pokemon ? pokemon.names : {};
}

function getLocalPokemonName(number) {
    return getPokemonNames(number)[settings.language];
}


/*
 * Get the URL of the Pokemon image. The format is 123.png. On failure, it returns false.
 */

function getPokemonImageUrl(number) {
    if(imageDirectory !== null)
        return imageDirectory + number + '.png';
    else
        return null;
}



/*
 * Get the URL of the Pokemon cry. The format is 123.mp3.
 */

function getPokemonSoundUrl(number) {
    return 'sounds/cries/' + number + '.mp3';
}


/*
 * Check to see if the guess equals the answer in any language. If it does, reveal the Pokemon, else return false.
 */

function checkPokemonAnswer(g) {
    var guess = removeAccents(g.toLowerCase());

    if (settings.language === 'en' && settings.forgivingSpelling && soundAlike(guess, currentPokemonNames.en) ) {
        revealPokemon(true);
    } else if(guess == removeAccents(currentPokemonNames[settings.language])) {
        revealPokemon(true);
    }
}



/*
 * Returns true if both inputs can be considered to be alike-sounding words, else false.
 */

function soundAlike(s1, s2, lang) {
    var l;

    if(lang === 'fr' || lang === 'de') {
        l = ( levenshtein(s1, s2) < 3 );
    } else {
        l = ( ( soundex(s1) === soundex(s2) ) && ( levenshtein(s1, s2) < 3 ) );
    }
    return l;
}

/*
 * Send correct / incorrect answers to GA and Mixpanel
 */
function trackCurrentPokemon(correct) {
    var guessData = {
        'Pokemon ID': currentPokemonNumber,
        'Correct': correct,
        'Difficulty': settings.difficulty,
        'Generation': settings.generations,
        'Time Taken': timeTaken
    };

    if(window.ga) window.ga('send', 'event', 'Guess', correct ? 'Correct' : 'Incorrect', currentPokemonNumber, timeTaken);
    if(window.mixpanel) window.mixpanel.track("Guess", guessData);
}


/*
 * Hide the infobox that shows updates
 */

function hideInfobox() {
    $("#infoBox").hide();
    localStorage.setItem(INFOBOX_LS_KEY, LATEST_INFOBOX);
}

/*
 * Save and load user settings and records
 */

var SETTINGS_LS_KEY = 'wtp_settings';
var RECORDS_LS_KEY = 'wtp_records';
function loadState() {
    var lsSettings = localStorage.getItem(SETTINGS_LS_KEY);

    if(lsSettings) {
        settings = JSON.parse(lsSettings);
    } else if(readCookie('generation')) { // assume that if this cookie exists, they all do
        settings = _getSettingsObjectFromCookie();
    } else {
        settings = _.extend({}, DEFAULT_SETTINGS);
    }

    settings.generations.forEach(function(generation) {
        setGen(generation);
    });
    setDifficulty(settings.difficulty);
    setSound(settings.sound);
    setForgivingSpelling(settings.forgivingSpelling);
    setLanguage(settings.language);

    var lsRecords = localStorage.getItem(RECORDS_LS_KEY);

    if(lsRecords) {
        records = JSON.parse(lsRecords)
    } else if(document.cookie.indexOf('totalTimeTaken') > -1) { // a quick way to check if there are cookies from an old version
        records = _getRecordsObjectFromCookie();
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
function _getDefaultRecordsObj() {
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


/*
 * Convert all the old cookie-based data to the new object format
 */
function _getSettingsObjectFromCookie() {
    return {
        generations: JSON.parse(readCookie('generation')) || DEFAULT_SETTINGS.generations,
        difficulty: parseInt(readCookie('difficulty'), 10) || DEFAULT_SETTINGS.difficulty,
        forgivingSpelling: readCookie('spelling') == '1' || DEFAULT_SETTINGS.forgivingSpelling,
        sound: readCookie('sound') == '1' || DEFAULT_SETTINGS.sound,
        language: readCookie('language') || DEFAULT_SETTINGS.language
    };
}

function _getRecordsObjectFromCookie() {
    var cookieRecords = _getDefaultRecordsObj();

    // The old cookie format supported four difficulties
    for(var i=0; i<4; i++) {
        cookieRecords.streaks[i] = parseInt(readCookie('bestCount' + i)) || 0;
        cookieRecords.bests.time[i] = parseInt(readCookie('bestTime' + i)) || 0;
        cookieRecords.bests.pokemonId[i] = parseInt(readCookie('bestPokemon' + i)) || 0;
        cookieRecords.totals.time[i] = parseInt(readCookie('totalTimeTaken' + i)) || 0;
        cookieRecords.totals.guesses[i] = parseInt(readCookie('totalGuesses' + i)) || 0;
    }

    return cookieRecords;
}

/*
 * Cookie stuff from http://www.quirksmode.org/js/cookies.html
 */

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}



/*
 * This returns a 'soundex', which gives a general idea of what a word sounds like.
 * From https://github.com/kvz/phpjs/blob/master/functions/strings/soundex.js
 */

function soundex (str) {
  str = (str + '').toUpperCase();
  if (!str) {
    return '';
  }
  var sdx = [0, 0, 0, 0],
    m = {
      B: 1, F: 1, P: 1, V: 1,
      C: 2, G: 2, J: 2, K: 2, Q: 2, S: 2, X: 2, Z: 2,
      D: 3, T: 3,
      L: 4,
      M: 5, N: 5,
      R: 6
    },
    i = 0,
    j, s = 0,
    c, p;

  while ((c = str.charAt(i++)) && s < 4) {
    if (j === m[c]) {
      if (j !== p) {
        sdx[s++] = p = j;
      }
    } else {
      s += i === 1;
      p = 0;
    }
  }

  sdx[0] = str.charAt(0);
  return sdx.join('');
}

/*
 * Calculates how many letters are different between two words
 * From https://github.com/kvz/phpjs/blob/master/functions/strings/levenshtein.js
 */

function levenshtein (s1, s2) {
  // http://kevin.vanzonneveld.net
  // +            original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
  // +            bugfixed by: Onno Marsman
  // +             revised by: Andrea Giammarchi (http://webreflection.blogspot.com)
  // + reimplemented by: Brett Zamir (http://brett-zamir.me)
  // + reimplemented by: Alexander M Beedie
  // *                example 1: levenshtein('Kevin van Zonneveld', 'Kevin van Sommeveld');
  // *                returns 1: 3
  if (s1 == s2) {
    return 0;
  }

  var s1_len = s1.length;
  var s2_len = s2.length;
  if (s1_len === 0) {
    return s2_len;
  }
  if (s2_len === 0) {
    return s1_len;
  }

  // BEGIN STATIC
  var split = false;
  try {
    split = !('0')[0];
  } catch (e) {
    split = true; // Earlier IE may not support access by string index
  }
  // END STATIC
  if (split) {
    s1 = s1.split('');
    s2 = s2.split('');
  }

  var v0 = new Array(s1_len + 1);
  var v1 = new Array(s1_len + 1);

  var s1_idx = 0,
    s2_idx = 0,
    cost = 0;
  for (s1_idx = 0; s1_idx < s1_len + 1; s1_idx++) {
    v0[s1_idx] = s1_idx;
  }
  var char_s1 = '',
    char_s2 = '';
  for (s2_idx = 1; s2_idx <= s2_len; s2_idx++) {
    v1[0] = s2_idx;
    char_s2 = s2[s2_idx - 1];

    for (s1_idx = 0; s1_idx < s1_len; s1_idx++) {
      char_s1 = s1[s1_idx];
      cost = (char_s1 == char_s2) ? 0 : 1;
      var m_min = v0[s1_idx + 1] + 1;
      var b = v1[s1_idx] + 1;
      var c = v0[s1_idx] + cost;
      if (b < m_min) {
        m_min = b;
      }
      if (c < m_min) {
        m_min = c;
      }
      v1[s1_idx + 1] = m_min;
    }
    var v_tmp = v0;
    v0 = v1;
    v1 = v_tmp;
  }
  return v0[s1_len];
}
