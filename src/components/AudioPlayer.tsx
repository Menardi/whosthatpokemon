import { useEffect, useRef } from 'preact/hooks';

import { DIFFICULTY } from '../constants';
import { useAppDispatch } from '../store';
import { setPokemonLoaded } from '../store/gameSlice';
import { useCurrentPokemonNumber, useGameState, useLang, useSettings } from '../util/hooks';
import { getPokemonSoundUrl } from '../util/pokemon';

const AudioPlayer = () => {
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLAudioElement>(null);
  const lang = useLang();
  const gameState = useGameState();
  const settings = useSettings();
  const number = useCurrentPokemonNumber();

  const shouldShowPlayer = settings.difficulty === DIFFICULTY.ELITE;

  useEffect(() => {
    if (gameState.answered) {
      ref.current?.play().catch(() => {});
    }
  }, [gameState.answered]);

  useEffect(() => {
    if (shouldShowPlayer) {
      ref.current?.play()
        .then(() => dispatch(setPokemonLoaded()))
        .catch(() => {});
    }
  }, [gameState.pokemon.currentIndex]);

  if (!settings.soundEnabled) {
    if (shouldShowPlayer) {
      return (
        <div className="audio-player-container">
          <p className="sound-off-warning">{lang.eliteNeedsAudio}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="audio-player-container" style={{ display: shouldShowPlayer ? 'flex' : 'none' }}>
      <audio
        className="audio-player"
        controls
        controlsList="nodownload"
        src={getPokemonSoundUrl(number)}
        ref={ref}
      >
        Your browser doesn't support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;