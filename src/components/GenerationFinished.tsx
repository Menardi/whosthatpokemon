import { useAppDispatch } from '../store';
import { resetPokemon } from '../store/actions';
import { useLang, useSettings } from '../util/hooks';

const GenerationFinished = () => {
  const dispatch = useAppDispatch();
  const lang = useLang();

  const startAgain = () => {
    dispatch(resetPokemon());
  };

  return (
    <div className="generation-finished">
      <p>{lang.genfinished}</p>

      <button onClick={startAgain}>
        {lang.startAgain}
      </button>
    </div>
  );
};

export default GenerationFinished;