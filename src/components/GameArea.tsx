import isEqual from 'lodash/isEqual';
import { useEffect } from 'preact/hooks';

import { DIFFICULTY, MILLISECONDS_BETWEEN_POKEMON } from '../constants';
import { useAppDispatch } from '../store';
import { goToNextPokemon, setNewPokemonList } from '../store/gameSlice';
import { useLang, useCurrentPokemonNumber, useGameState, useSettings } from '../util/hooks';
import { getPokemonNumbers, preloadPokemonMedia } from '../util/pokemon';
import AnswerInput from './AnswerInput';
import AudioPlayer from './AudioPlayer';
import GenerationFinished from './GenerationFinished';
import PokemonSilhouette from './PokemonSilhouette';

type GameAreaProps = {
  onMenuOpen: (menu: 'settings' | 'stats') => void;
};

const GameArea = ({ onMenuOpen }: GameAreaProps) => {
  const dispatch = useAppDispatch();
  const lang = useLang();
  const settings = useSettings();

  const gameState = useGameState();

  // Handle when the Pokémon is revealed, whether with a correct answer, or by the "I don't know" button
  useEffect(() => {
    if (gameState.answered) {
      if (gameState.pokemon.currentIndex + 1 < gameState.pokemon.numbers.length - 1) {
        preloadPokemonMedia(
          gameState.pokemon.numbers[gameState.pokemon.currentIndex + 1],
          settings.difficulty,
          settings.soundEnabled,
        );
      }

      const timeoutId = setTimeout(() => {
        dispatch(goToNextPokemon());
      }, MILLISECONDS_BETWEEN_POKEMON);

      return () => clearTimeout(timeoutId);
    }
  }, [gameState.answered]);

  // Re-generate the numbers if the generation settings have changed
  // TODO Add better number re-generation so we intelligently add or remove numbers based on the
  // generation change, rather than fully regenerating the array.
  useEffect(() => {
    if (!isEqual(settings.generations, gameState.pokemon.generations)) {
      dispatch(setNewPokemonList(getPokemonNumbers(settings)));
    }
  }, [settings.generations]);

  return (
    <div className="game-area">
      <header>
        <button onClick={() => onMenuOpen('settings')}>
          <img src="images/icons/gear.svg" title="Settings" />
        </button>

        <h1>{lang.title}</h1>

        <button onClick={() => onMenuOpen('stats')}>
          <img src="images/icons/stats.svg" title="Stats" />
        </button>
      </header>

      {gameState.pokemon.currentIndex > gameState.pokemon.numbers.length - 1 ? (
        <GenerationFinished />
      ) : (
        <>
          {settings.difficulty !== DIFFICULTY.ELITE && (
            <PokemonSilhouette />
          )}
          <AudioPlayer />
          <AnswerInput />
        </>
      )}
    </div>
  );
};

export default GameArea;
