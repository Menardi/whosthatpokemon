import { AppDispatch, RootState } from '.';
import { getPokemonNumbers } from '../util/pokemon';
import { goToNextIndex, setNewPokemonList } from './gameSlice';
import { processPendingSettings } from './settingsSlice';

/** Goes to the next Pokémon. Checks first to see if there are any settings changes. If there are,
 *  it processes them, and then generates new numbers based on the new settings. */
export const goToNextPokemon = () => ((dispatch: AppDispatch, getState: () => any) => {
  // redux-persist doesn't play super nicely with Redux v5, so we define the getState argument above as returning
  // any, so our dispatches are satisfied, but then cast it to RootState here, since that's the actual value.
  let state = getState() as RootState;

  if (state.settings.pendingSettings) {
    dispatch(processPendingSettings());
    state = getState(); // get the new state after changing the settings
    dispatch(setNewPokemonList(getPokemonNumbers(getState().settings)));
  } else {
    dispatch(goToNextIndex());
  }
});
