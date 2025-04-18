import { useEffect, useState } from 'preact/hooks';

import { MILLISECONDS_BETWEEN_POKEMON } from '../constants';
import { useAppDispatch } from '../store';
import { goToNextPokemon } from '../store/actions';
import CountdownLoader from './CountdownLoader';
import styles from './css/NextPokemonTimer.module.css';

const NextPokemonTimer = () => {
  const dispatch = useAppDispatch();

  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    if (!isCounting) return;

    const timeoutId = setTimeout(() => {
      dispatch(goToNextPokemon());
    }, MILLISECONDS_BETWEEN_POKEMON);

    const keyListener = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        setIsCounting(false);
      }
    };

    window.addEventListener('keydown', keyListener);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('keydown', keyListener);
    };
  }, [isCounting]);

  return (
    <div className={styles.container}>
      {isCounting ? (
        <div
          className={styles.countdownContainer}
          role="button"
          onClick={() => setIsCounting(false)}
        >
          <CountdownLoader />

          <div className={styles.iconPauseContainer}>
            <img src="images/icons/pause.svg" />
          </div>
        </div>
      ) : (
        <button
          onClick={() => dispatch(goToNextPokemon())}
          className={styles.nextButton}
        >
          <img src="images/icons/chevron-right.svg" />
        </button>
      )}
    </div>
  );
};

export default NextPokemonTimer;
