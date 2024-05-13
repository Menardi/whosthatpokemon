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
      return <p className="sound-off-warning">{lang.eliteNeedsAudio}</p>;
    }

    return null;
  }

  return (
    <audio
      className="audio-player"
      controls
      controlsList="nodownload"
      style={{ display: shouldShowPlayer ? 'block' : 'none' }}
      src={getPokemonSoundUrl(number)}
      ref={ref}
    >
      Your browser doesn't support the audio element.
    </audio>
  );
};

export default AudioPlayer;