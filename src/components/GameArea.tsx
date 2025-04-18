import { useEffect } from 'preact/hooks';

import { DIFFICULTY } from '../constants';
import { useLang, useGameState, useSettings } from '../util/hooks';
import { preloadPokemonMedia } from '../util/pokemon';
import AnswerInput from './AnswerInput';
import AudioPlayer from './AudioPlayer';
import GenerationFinished from './GenerationFinished';
import PokemonSilhouette from './PokemonSilhouette';

type GameAreaProps = {
  onMenuOpen: (menu: 'settings' | 'stats') => void;
};

const GameArea = ({ onMenuOpen }: GameAreaProps) => {
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
    }
  }, [gameState.answered]);

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
