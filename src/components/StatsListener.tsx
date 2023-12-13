import { useEffect } from 'preact/hooks';

import { useAppDispatch } from '../store';
import { setAnswered } from '../store/statsSlice';
import { useCurrentPokemonNumber, useGameState, useSettings } from '../util/hooks';

/** This component doesn't render anything, but instead listen's to the game's state via Redux,
 *  and stores stat data when a Pokémon has been revealed. Having this listener means we can
 *  track stats easily, regardless of why the Pokémon was revealed. */
const StatsListener = () => {
  const dispatch = useAppDispatch();

  const gameState = useGameState();
  const settings = useSettings();
  const pokemonNumber = useCurrentPokemonNumber();

  useEffect(() => {
    if (gameState.answered) {
      dispatch(setAnswered({
        difficulty: settings.difficulty,
        isCorrect: gameState.answered === 'correct',
        pokemonNumber: pokemonNumber,
        timeStarted: gameState.lastLoadedTime,
      }));
    }
  }, [gameState.answered]);

  return null;
};

export default StatsListener;
