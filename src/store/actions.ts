import { AppDispatch, RootState } from '.';
import { getPokemonNumbers } from '../util/pokemon';
import { goToNextIndex, setNewPokemonList } from './gameSlice';
import { processPendingSettings } from './settingsSlice';

export const resetPokemon = () => ((dispatch: AppDispatch, getState: () => RootState) => {
  let state = getState();

  if (state.settings.pendingSettings) {
    dispatch(processPendingSettings());
    state = getState(); // get the new state after changing the settings
  }

  dispatch(setNewPokemonList(getPokemonNumbers(state.settings)));
});

/** Goes to the next Pokémon. Checks first to see if there are any settings changes. If there are,
 *  it processes them, and then generates new numbers based on the new settings. */
export const goToNextPokemon = () => ((dispatch: AppDispatch, getState: () => RootState) => {
  if (getState().settings.pendingSettings) {
    dispatch(resetPokemon());
  } else {
    dispatch(goToNextIndex());
  }
});
