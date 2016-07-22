/*
 * pokemon.js
 *
 * All in-game functionality is in this file
 */

// Initialise some variables
var currentPokemonNumber;
var currentPokemonNames = {}; // a dictionary which stores English, French and German names of the current Pokemon
var currentPokemonImageUrl;
var selectedLanguage = 'en';

// For Pokemon cries
var currentPokemonSoundUrl;

// For generation selection
var minPokemonNumber = -1;
var maxPokemonNumber = -1;
var currentGen = [1, 2, 3, 4, 5];
var newGen = [];
var allGenerations = {
    1: {
       start: 1,
       end: 151
    },
    2: {
       start: 152,
       end: 251
    },
    3: {
       start: 252,
       end: 386
    },
    4: {
       start: 387,
       end: 493
    },
    5: {
       start: 494,
       end: 649
    }
};


// To count streaks
var correctCount = [0, 0, 0, 0];
var bestCount = [0, 0, 0, 0]; // separate count for each difficulty

// For countdown timer after a correct answer
var nextTimer = 3;
var intervalId;

// For timing how long an answer takes
var startTime;
var bestTimes = ['-', '-', '-', '-'];
var timeTaken = '-';
var totalTimeTaken = [0, 0, 0, 0];
var totalGuesses = [0, 0, 0, 0]; // average time will be totalTimeTaken / totalGuesses

// Store the name of the Pokemon that was guessed in the fastest time
var bestPokemonNumber = [-1, -1, -1, -1];

// Used for difficulty setting
var currentDifficulty = -1;
var newDifficulty = -1;
var imageDirectory;

// Set if a Pokemon image has been preloaded
var pokemonPreloaded = false;
var preloadedGen = [-1];
var preloadedDifficulty = -1;

// This will store the current image loaded
var loadedImage;

// Counts the number of times in a row an image has failed to load
var consecutiveLoadFails = 0;

// Will be used to hold the ID of the image loading timeout so it can be disabled if necessary
var imageTimeoutId;

// Spelling tolerance
var spellingLevel = -1;

// Stat tracking
var stats;
var untrackedPokemon = 0;

// Will be used as an array to store upcoming Pokemon
var upcomingPokemon;
var upcomingPokemonArrayPos;

// Sound setting
var soundLevel = -1;

var firstRender = true;

var $els;

var IPHONE_KEYBOARD_HEIGHT = 216;

var isIphone = /iPhone|iPod/.test(navigator.userAgent);

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
        dontKnowButton: $('#giveAnswer')
    };

	// Event listeners first
	$('.languageSelector').on('click', function() {
		setLanguage($(this).data('language'));
	});

    $('.show-menu').on('click', function(ev) {
        $('#' + $(ev.currentTarget).data('menu')).addClass('shown');
    });

    $('.close-button').on('click', function(ev) {
        $(ev.currentTarget).parent().removeClass('shown');
    });

    $els.dontKnowButton.on('click', giveAnswer);

    loadState();

    generateNewNumbers(true);

    newPokemon();

    for(var i=0; i < newGen.length; i++) {
        $("#gen" + newGen[i]).removeClass("pending").addClass("selected");
    }

    var c = readCookie('lastInfobox');

    if ( (c!==null) && (c <= 20160720) ) {
        $("#infoBox").hide();
    }

    var previousWindowHeight = window.innerHeight;
    var $canvasContainer = $('#canvasContainer');
    var $canvas = $('canvas');

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
        // for sure when they keyboard is open or what height it is. So instead
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

    //Before editing gen selection, we ensure that the user is not about to remove their last gen
    if (!(newGen.length === 1 && newGen[0] === genToAffect)) {

        //Remove all the "selected" classes and replace them with "pending" classes if it's the user's first time clicking a gen this round
        $('.selected.genSelect').removeClass('selected').addClass('pending');


        if (newGen.indexOf(genToAffect) > -1) {
            newGen.splice(newGen.indexOf(genToAffect), 1);
            $("#gen" + genToAffect).removeClass("pending");
        } else {
            newGen.push(genToAffect);
            $("#gen" + genToAffect).addClass("pending");
        }


        //show the infoBox
        document.getElementById('infoBoxMain').setAttribute('style', 'display: inherit');


    }

    /*
     * This should only happen if the user has reached the end of a generation and then changed
     * the generation. It instantly puts up a new Pokemon.
     */
    if(currentPokemonNumber === -1) {
        generateNewNumbers(true);
        newPokemon();
    }

}

/*
 * Sets the difficulty level, which is essentially choosing where we get the images from.
 */

function setDifficulty(selectedDifficulty) {

    if (selectedDifficulty == 0) {
        imageDirectory = 'images/artwork/';
    } else if (selectedDifficulty == 1) {
        imageDirectory = 'images/sprites/front/';
    } else if (selectedDifficulty == 2) {
        imageDirectory = 'images/sprites/back/';
    } else {
        imageDirectory = null;
    }

    if (newDifficulty == -1) {
        document.getElementById('diff' + selectedDifficulty).className += " selected";
        currentDifficulty = selectedDifficulty;
    } else {
        document.getElementById('diff' + newDifficulty).className = document.getElementById('diff' + newDifficulty).className.replace('pending','');

        if(selectedDifficulty != currentDifficulty)
            document.getElementById('diff' + selectedDifficulty).className += " pending";

        document.getElementById('infoBoxMain').setAttribute('style', 'display: inherit');
    }

    newDifficulty = selectedDifficulty;

}



/*
 * Sets the tolerance for bad spelling. Right now there are two settings -- exact and
 * forgiving.
 */

function setSpelling(level) {
    document.getElementById('spell' + level).className += " selected";

    if(spellingLevel !== -1 )
        document.getElementById('spell' + spellingLevel).className = document.getElementById('spell' + spellingLevel).className.replace('selected','');

    spellingLevel = level;
}



/*
 * Turns Pokemon cries on or off
 */

function setSound(level) {
    document.getElementById('sound' + level).className += " selected";

    if(soundLevel !== -1 )
        document.getElementById('sound' + soundLevel).className = document.getElementById('sound' + soundLevel).className.replace('selected','');

    soundLevel = level;
}



/*
 * Sets the language
 */

function setLanguage(l) {
	// Set the language variable
	if (l === 'en' || l === 'fr' || l === 'de' || l === 'es' || l === 'jp') {
		selectedLanguage = l;
	} else {
		return false;
	}

	// Change all the languages on the page
	$('.translatable').each(function() {
		$(this).html(lang[selectedLanguage][$(this).data('lang')]);
	});

	// Highlight the flag of the selected language
	$('.languageSelector.selected').removeClass('selected');
	$('.' + selectedLanguage + 'LanguageSelector').addClass('selected');

    //Hide forgiving spelling option if the language is not english, and set the spelling option to exact
    if (l !== 'en') {
        document.getElementById('spell1').setAttribute('style', 'visibility: hidden');
        setSpelling(0);
    } else {
        document.getElementById('spell1').setAttribute('style', 'visibility: inherit');
    }


}

/*
 * Remove the silhouette of the Pokemon, and show the user that they are right, if they
 * managed to guess themselves.
 */

function revealPokemon(correctlyGuessed, language) {

    timeTaken = new Date().getTime() - startTime;
    clearTimeout(imageTimeoutId);

    silhouette(currentPokemonImageUrl, 'shadowImage', false);

    if(soundLevel == 1) {
        $els.audioPlayer.get(0).play().catch(_.noop);
    }

    if(correctlyGuessed) {
        /*
         * Chrome appears to have a bug where the field continues to take input after
         * the input field is disabled, so we need to check here before increasing the count.
         */
        if(!$els.input.hasClass('correct')) {

            $els.input.addClass('correct');
            correctCount[currentDifficulty]++;

            // Increase the best count if it has been beaten
            if(correctCount[currentDifficulty] > bestCount[currentDifficulty]) {
                bestCount[currentDifficulty] = correctCount[currentDifficulty];
            }

            // Check if the best time has been beaten
            if(timeTaken < bestTimes[currentDifficulty] || bestTimes[currentDifficulty] == '-') {
                bestTimes[currentDifficulty] = timeTaken;
                bestPokemonNumber[currentDifficulty] = currentPokemonNumber;
            }

            totalTimeTaken[currentDifficulty] += timeTaken;
            totalGuesses[currentDifficulty] += 1;

        }

        trackCurrentPokemon(1);
    } else {
        trackCurrentPokemon(0);
        correctCount[currentDifficulty] = 0;
        timeTaken = '-';
    }

    // Should only happen once, and regardless of whether the user got it right or wrong
    if(!$els.input.hasClass('disabled')) {
        nextCountdown();
        intervalId = setInterval(nextCountdown, 1000);
    }
    $els.input.addClass('disabled');

    // Give the Pokemon name
    $els.input.val(currentPokemonNames[selectedLanguage]);

    $('.currentCountText').html(correctCount[currentDifficulty]);
    $('.bestCountText').html(bestCount[currentDifficulty]);

    if(correctlyGuessed && !isNaN(timeTaken))
        $('.lastTimeText').html(timeTaken/1000);
    else
        $('.lastTimeText').html('-');

    if(bestTimes[currentDifficulty] != '-')
        $('.bestTimeText').html(bestTimes[currentDifficulty]/1000);

    if(bestPokemonNumber[currentDifficulty] > 0)
        $('.bestTimePokemon').html('(' + getLocalPokemonName(bestPokemonNumber[currentDifficulty]) + ')');

    if(totalGuesses[currentDifficulty] > 0) {
        var avgTime = totalTimeTaken[currentDifficulty] / totalGuesses[currentDifficulty] / 1000;
        $('.averageTimeText').html(avgTime.toFixed(3));
    }

    $("#giveAnswer").hide();
    $("#nextCountdown").show();

    // Before we preload the new pokemon, we display this pokemon's other names
    $("#alsoKnownAs").show();
    for (var l in lang) {
        var $el = $('#alsoKnownAs' + l);
        if (l !== selectedLanguage) {
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

    if(force || !_.isEqual(currentGen, newGen)) {

        upcomingPokemon = [];
        upcomingPokemonArrayPos = 0;
        var i = 0;
        //we iterate through each newGen number and put it through _.range to get the
        //pokemon numbers which is then pushed to upcomingPokemon and finally shuffled
        newGen.forEach(function(genToInc) {
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
        img = new Image();
        img.src = currentPokemonImageUrl;
        pokemonPreloaded = true;
        preloadedGen = currentGen;
        preloadedDifficulty = currentDifficulty;
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
    if(!pokemonPreloaded || !_.isEqual(currentGen, newGen) || preloadedDifficulty != newDifficulty) {
        currentPokemonNumber = getRandomPokemonNumber();
    }

    nextTimer = 3;
    clearInterval(intervalId);

    if(currentPokemonNumber < 0) {
        generationFinished();
    } else {
        pokemonPreloaded = false;

        currentPokemonNames = getPokemonNames(currentPokemonNumber);
        currentPokemonImageUrl = getPokemonImageUrl(currentPokemonNumber);
        currentPokemonSoundUrl = getPokemonSoundUrl(currentPokemonNumber);

        $els.input.removeClass('correct disabled').val('');

        document.getElementById('giveAnswer').setAttribute('style', 'display: block');
        document.getElementById('nextCountdown').setAttribute('style', 'display: none');
        document.getElementById('alsoKnownAs').setAttribute('style', 'display: none');

        document.getElementById('infoBoxMain').setAttribute('style', 'display: none');

        // Save the settings and refresh the settings boxes
        updateStateAndRefreshUI();
        saveState();

        // Now load the next Pokemon
        if(currentPokemonImageUrl !== null) {
            silhouette(currentPokemonImageUrl, 'shadowImage', true);
            imageTimeoutId = setTimeout(checkPokemonLoaded, 10000);
        }

        $els.audioPlayer.attr('src', currentPokemonSoundUrl);
        if(currentDifficulty > 2) {
            $els.audioPlayer.get(0).play().catch(_.noop);
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
    var message = '<p>Well done, you got through the whole generation! Why not try a different setting?</p>';
    messageDiv = document.getElementById('infoMessage');
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
            $('#nextCountdown').innerHTML = lang[selectedLanguage].loadfail;
        } else {
            $('#nextCountdown').data("lang", "slowconn");
            $('#nextCountdown').innerHTML = lang[selectedLanguage].slowconn;
        }

        document.getElementById('nextCountdown').setAttribute('style', 'display: block');

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

    //Checks to see if the generation selection has changed
    if(!_.isEqual(currentGen, newGen)) {

        //First we remove selected and current from all the gens
        $('.genSelect').removeClass('pending selected');
        //We destroy the old currentGen so we can fill this empty array with all the elements of newGen
        currentGen = [];

        //Add current to all of our selected generations and push them into current Gen
        for(var i=0; i < newGen.length; i++) {
            $("#gen" + newGen[i]).addClass("selected");
            currentGen.push(newGen[i]);
        }
    } else if ($(".genSelect").hasClass('pending')) {
        //In the case that the user began to change the generation and then changed their mind,
        //we switch the generations back to current
        $('.genSelect.selected').toggleClass('pending selected');

    }


    if(newDifficulty != currentDifficulty) {
        // The difficulty has been updated, so highlight the new one
        $(".diffSelect").removeClass("pending selected");
        $("#diff" + newDifficulty).addClass("selected");

        // Show the info box explaining that the change means different streaks and times
        $("#infoBoxRight").show();
        currentDifficulty = newDifficulty;
    } else {
        $("#infoBoxRight").hide();
    }

    // We're into a sound-based difficulty
    if(currentDifficulty > 2) {
        $els.audioPlayer.show();
        $els.canvas.hide();
        setSound(1);
    } else {
        $els.canvas.show();
        $els.audioPlayer.hide();
    }

    $('.bestCountText').html(bestCount[currentDifficulty]);
    $('.currentCountText').html(correctCount[currentDifficulty]);

    if (bestPokemonNumber[currentDifficulty] > 0) {
        $('.bestTimePokemon').html('(' + getLocalPokemonName(bestPokemonNumber[currentDifficulty]) + ')');
    } else {
        $('.bestTimePokemon').html('');
    }

    if (bestTimes[currentDifficulty] == '-') {
        $('.bestTimeText').html('-');
    } else {
        $('.bestTimeText').html(bestTimes[currentDifficulty]/1000);
    }

    if (totalGuesses[currentDifficulty] > 0) {
        var avgTime = totalTimeTaken[currentDifficulty] / totalGuesses[currentDifficulty] / 1000;
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
		var countdownMessage = lang[selectedLanguage].nextpokemon;
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
 * Deletes cookies relating to time records
 */
function clearTimes() {
    eraseCookie('bestTime');
    bestTime = '-';
    document.getElementById('bestTimeText').innerHTML = bestTime;
    document.getElementById('lastTimeText').innerHTML = '-';
}



/*
 * Sort of a relic from when the number was randomly generated on demand. Still useful to
 * have to return a number from the randomised array.
 */

function getRandomPokemonNumber() {
    var number;
    if(upcomingPokemonArrayPos > upcomingPokemon.length) {
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
    var names = { 'en' : englishPokemon[number-1], 'fr' : frenchPokemon[number-1], 'de' : germanPokemon[number-1], 'jp' : japanesePokemon[number-1] };
    return names;
}

function getLocalPokemonName(number) {
    return getPokemonNames(number)[selectedLanguage];
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
 * Get the URL of the Pokemon cry. The format is 123.ogg.
 */

function getPokemonSoundUrl(number) {
    return 'sounds/cries/' + number + '.ogg';
}


/*
 * Check to see if the guess equals the answer in any language. If it does, reveal the Pokemon, else return false.
 */

function checkPokemonAnswer(g) {
    var guess = g.toLowerCase();

    if (selectedLanguage === 'en') {
		if ( ( spellingLevel > 0 ) && ( soundAlike(guess, currentPokemonNames.en) ) ) {
			revealPokemon(true, 'en');
		} else if (guess == currentPokemonNames.en) {
			revealPokemon(true, 'en');
		}
	} else if (selectedLanguage === 'fr') {
		if (guess == removeAccents(currentPokemonNames.fr)) {
			revealPokemon(true, 'fr');
		}
	} else if (selectedLanguage === 'de') {
		if (guess == removeAccents(currentPokemonNames.de)) {
			revealPokemon(true, 'de');
		}
	} else if (selectedLanguage === 'jp') {
        if (guess == removeAccents(currentPokemonNames.jp)) {
            revealPokemon(true, 'jp');
        }
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




/*
 * Tracks stats to be sent to the backend database
 */

function trackCurrentPokemon(correct) {

    if (untrackedPokemon === 0) {
        // Initialise the stats object
        stats = [];
    }

    stats[untrackedPokemon] = {
        "pokemonId": currentPokemonNumber,
        "correct": correct,
        "difficulty": currentDifficulty,
        "generation": currentGen,
        "timeTaken": timeTaken
    };

    untrackedPokemon++;

    // Send stats to the server every 5 guesses
    if (untrackedPokemon >= 5) {
        var jsonStats = JSON.stringify(stats)
        var req = new XMLHttpRequest();

        req.open('POST', jsVariables.statServerUrl);
        req.setRequestHeader('Content-type', 'application/json', true);
        req.send(jsonStats);
        untrackedPokemon = 0;
    }

}


/*
 * Hide the infobox that shows updates
 */

function hideInfobox(d) {
    $("#infoBox").hide();
    createCookie('lastInfobox', d, 365);
}

/*
 * Cookie stuff from http://www.quirksmode.org/js/cookies.html
 */

function createCookie(name,value,days) {
    var expires;

	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	} else {
        expires = "";
    }
	document.cookie = name+"="+value+expires+"; path=/";
}

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

function eraseCookie(name) {
	createCookie(name,"",-1);
}

/*
 * Functions to save settings to cookies, and to load them back
 */

function saveState() {
    createCookie('generation', JSON.stringify(currentGen), 365);
    createCookie('difficulty', currentDifficulty, 365);
    createCookie('spelling', spellingLevel, 365);
    createCookie('sound', soundLevel, 365);
	createCookie('language', selectedLanguage, 365);

    for(var i=0; i<bestCount.length; i++) {
        if (bestCount[i] > 0) {
            createCookie('bestCount'+i, bestCount[i], 365);
        }

        if (bestTimes[i] != '-') {
            createCookie('bestTime'+i, bestTimes[i], 365);
        }

        if (bestPokemonNumber[i] > 0) {
            createCookie('bestPokemon'+i, bestPokemonNumber[i], 365);
        }

        if (totalTimeTaken[i] > 0) {
            createCookie('totalTimeTaken'+i, totalTimeTaken[i], 365);
        }

        if (totalGuesses[i] > 0) {
            createCookie('totalGuesses'+i, totalGuesses[i], 365);
        }
    }
}

function loadState() {
    var c;

    c = JSON.parse(readCookie('generation'));

    //we catch bad and old format cookies
    if( (c === null) || (typeof c !== "object") ) {
    	c = [1, 2, 3, 4, 5];
    }

    for (var genToSet=0; genToSet < c.length; genToSet++) {
        setGen(c[genToSet]);
    }

    c = readCookie('difficulty');

    if( (c !== null) && (c >= 0) && (c <= 3) ) {
        setDifficulty(c);
    } else {
        setDifficulty(0);
    }

    c = readCookie('spelling');

    if( (c !== null) && (c >= 0) && (c <= 1) ) {
        setSpelling(c);
    } else {
        setSpelling(0);
    }

    c = readCookie('sound');

    if( (c !== null) && (c >= 0) && (c <= 1) ) {
        setSound(c);
    } else {
        setSound(0);
    }

    c = readCookie('language') || 'en';
    setLanguage(c);

    for(var i=0; i<bestCount.length; i++) {
        var bc = readCookie('bestCount' + i);
        var bt = readCookie('bestTime' + i);
        var bp = readCookie('bestPokemon' + i);
        var tt = readCookie('totalTimeTaken' + i);
        var tg = readCookie('totalGuesses' + i);

        if (bc > 0) {
            bestCount[i] = parseInt(bc);
        }

        if (bt > 0) {
            bestTimes[i] = parseInt(bt);
        }

        if (bp > 0) {
            bestPokemonNumber[i] = parseInt(bp);
        }

        if (tt > 0) {
            totalTimeTaken[i] = parseInt(tt);
        }

        if (tg > 0) {
            totalGuesses[i] = parseInt(tg);
        }
    }
}