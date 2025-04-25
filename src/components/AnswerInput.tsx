import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

import { LANGUAGES } from '../constants/lang';
import { POKEMON_NAMES } from '../constants/pokemon';
import { useAppDispatch } from '../store';
import { goToNextPokemon } from '../store/actions';
import { revealPokemon } from '../store/gameSlice';
import { useCurrentPokemonNumber, useGameState, useLang, useSettings } from '../util/hooks';
import { removeAccents, soundAlike } from '../util/spelling';
import CountdownLoader from './CountdownLoader';
import NextPokemonTimer from './NextPokemonTimer';

const AnswerInput = () => {
  const dispatch = useAppDispatch();
  const lang = useLang();
  const settings = useSettings();
  const gameState = useGameState();

  // On mobile, when the user taps the "I don't know button", the input gets blurred and the screen
  // moves awkwardly. To avoid this, we keep track of the input's focus state, and don't change it to
  // false until 200ms after blur. We can then use this to refocus the input when "I don't know" was
  // pressed, while not opening the keyboard if the user didn't have it open.
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputRecentlyFocused, setIsInputRecentlyFocused] = useState(false);
  const onInputFocus = useCallback(() => setIsInputRecentlyFocused(true), []);
  const onInputBlur = useCallback(() => {
    setTimeout(() => setIsInputRecentlyFocused(false), 200);
  }, []);

  const [guess, setGuess] = useState('');

  const number = useCurrentPokemonNumber();
  const pokemonNames = useMemo(() => (
    POKEMON_NAMES.find((pokemon) => pokemon.number === number)!.names
  ), [number]);

  const checkGuess = (guess: string) => {
    const normalisedGuess = removeAccents(guess.toLowerCase());
    const normalisedAnswer = removeAccents(pokemonNames[settings.language].toLowerCase());

    if (
      (settings.forgivingSpellingEnabled && settings.language === 'en' && soundAlike(normalisedGuess, normalisedAnswer))
      || (normalisedGuess === normalisedAnswer)) {
      dispatch(revealPokemon({ isCorrect: true }));
      setGuess(pokemonNames[settings.language]);
    }
  };

  const onInput = (ev: JSXInternal.TargetedInputEvent<HTMLInputElement>) => {
    if (!gameState.answered) {
      setGuess(ev.currentTarget.value);
      checkGuess(ev.currentTarget.value);
    } else {
      // Chrome on Android has an issue where calling ev.preventDefault() on keydown doesn't
      // prevent the value from being updated, unlike every other browser. If the user is in
      // forgiving spelling mode, it's quite possible for them to type too many characters,
      // and end up with a confusing answer. This workaround fixes the issue by setting the
      // value to the actual answer if the user types anything while in the "correct" state.
      ev.currentTarget.value = guess;
    }
  };

  const onKeyDown = (ev: JSXInternal.TargetedKeyboardEvent<HTMLInputElement>) => {
    if (gameState.answered) {
      ev.preventDefault();

      if (ev.key === 'Enter') {
        dispatch(goToNextPokemon());
      }
    }
  };

  const onGiveUpClick: JSXInternal.MouseEventHandler<HTMLButtonElement> = (ev) => {
    // `detail` on a click event represents the number of mouse clicks or touches. If it's zero,
    // it means the click was trigged by keyboard.
    const wasTriggeredByKeyboard = ev.detail === 0;

    // Re-focus the input if this button press blurred it, or the give up button was triggered via keyboard
    if (isInputRecentlyFocused || wasTriggeredByKeyboard) {
      inputRef.current?.focus();
    }

    dispatch(revealPokemon({ isCorrect: false }));
    setGuess(pokemonNames[settings.language]);
  };

  // Reset the input when the Pokémon changes.
  useEffect(() => {
    // This "if" ensures the guess doesn't get cleared when hot reloading during development
    if (!gameState.answered) {
      setGuess('');
    }
  }, [number]);

  return (
    <div className="answer-area">
      <div className="answer-input-container">
        <input
          type="text"
          className={`answer-input ${gameState.answered ? 'answer-input-correct' : ''}`}
          name="pokemonGuess"
          autocomplete="off"
          autocorrect="off"
          tabindex={1}
          spellcheck={false}
          onInput={onInput}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onKeyDown={onKeyDown}
          value={guess}
          ref={inputRef}
          // Add the number as an attribute during development to help make testing easier
          {...(process.env.NODE_ENV !== 'production' ? {
            'data-pokemon-number': number,
          } : {})}
        />

        {gameState.answered && <NextPokemonTimer />}

        <span className="progress-counter">
          {`${gameState.pokemon.currentIndex + 1} / ${gameState.pokemon.numbers.length}`}
        </span>
      </div>

      {gameState.answered ? (
        <div className="also-known-as">
          <h2>{lang.alsoknownas}</h2>
          <ul>
            {Object.values(LANGUAGES)
              .filter((lang) => lang.code !== settings.language)
              .map((lang) => (
                <li key={lang.code}>
                  <img src={lang.flagUrl} />
                  {pokemonNames[lang.code]}
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <button
          tabIndex={2}
          className="dont-know-button"
          onClick={onGiveUpClick}
        >
          {lang.dontknow}
        </button>
      )}

      {!!settings.pendingSettings && (
        <span className="new-settings-effect">{lang['settingsEffect']}</span>
      )}
    </div>
  );
};

export default AnswerInput;
