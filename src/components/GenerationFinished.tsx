import { useAppDispatch } from '../store';
import { setNewPokemonList } from '../store/gameSlice';
import { processPendingSettings } from '../store/settingsSlice';
import { useLang, useSettings } from '../util/hooks';
import { getPokemonNumbers } from '../util/pokemon';

const GenerationFinished = () => {
  const dispatch = useAppDispatch();
  const lang = useLang();
  const settings = useSettings();

  const startAgain = () => {
    dispatch(processPendingSettings());
    dispatch(setNewPokemonList(getPokemonNumbers(settings)));
  };

  return (
    <div className="generation-finished">
      <p>{lang.genfinished}</p>

      <button onClick={startAgain}>{lang.startAgain}</button>
    </div>
  );
};

export default GenerationFinished;