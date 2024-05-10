import { useEffect, useMemo, useState } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

import { LANGUAGES } from '../constants/lang';
import { POKEMON_NAMES } from '../constants/pokemon';
import { useAppDispatch } from '../store';
import { goToNextPokemon } from '../store/actions';
import { revealPokemon } from '../store/gameSlice';
import { useCurrentPokemonNumber, useGameState, useLang, useSettings } from '../util/hooks';
import { removeAccents, soundAlike } from '../util/spelling';
import CountdownLoader from './CountdownLoader';

const AnswerInput = () => {
  const dispatch = useAppDispatch();
  const lang = useLang();
  const settings = useSettings();
  const gameState = useGameState();

  const [guess, setGuess] = useState('');

  const number = useCurrentPokemonNumber();
  const pokemonNames = useMemo(() => (
    POKEMON_NAMES.find((pokemon) => pokemon.number === number)!.names
  ), [number]);

  const checkGuess = (guess: string) => {
    const normalisedGuess = removeAccents(guess.toLowerCase());
    const normalisedAnswer = removeAccents(pokemonNames[settings.language]);

    if (
      (settings.forgivingSpellingEnabled && settings.language === 'en' && soundAlike(normalisedGuess, normalisedAnswer))
      || (normalisedGuess === pokemonNames[settings.language])) {
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

  const onGiveUp = () => {
    // TODO Re-focus the input if it was focused before pressing this button
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
          onKeyDown={onKeyDown}
          value={guess}
        />

        {gameState.answered && <CountdownLoader />}

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
          className="dont-know-button"
          onClick={onGiveUp}
        >
          {lang.dontknow}
        </button>
      )}

      {!!settings.pendingSettings && (
        <span className="new-settings-effect">{lang['settings-effect']}</span>
      )}
    </div>
  );
};

export default AnswerInput;
