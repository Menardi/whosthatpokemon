import classNames from 'classnames';
import { useEffect, useRef } from 'preact/hooks';

import { DIFFICULTY, Difficulty } from '../constants';
import { useAppDispatch } from '../store';
import { setPokemonLoaded } from '../store/gameSlice';
import { useCurrentPokemonNumber, useGameState, useSettings } from '../util/hooks';
import { getPokemonImageUrl } from '../util/pokemon';

const IMAGE_DIRECTORIES = {
  [DIFFICULTY.EASY]: 'images/artwork/',
  [DIFFICULTY.NORMAL]: 'images/artwork/',
  [DIFFICULTY.ULTRA]: 'images/sprites/front/',
  [DIFFICULTY.MASTER]: 'images/sprites/back/',
  [DIFFICULTY.ELITE]: null,
} as const satisfies {
  [key in Difficulty]: string | null;
};

/** Sprites get scaled up, but shouldn't be bigger than this size */
const MAX_SPRITE_SIZE = 400;

const PokemonSilhouette = () => {
  const dispatch = useAppDispatch();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const settings = useSettings();
  const gameState = useGameState();
  const number = useCurrentPokemonNumber();

  const shouldSilhouette = !gameState.answered && settings.difficulty !== DIFFICULTY.EASY;

  useEffect(() => {
    if (!IMAGE_DIRECTORIES[settings.difficulty] || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;

    // Wipes the canvas clean. This is useful if a Pokemon is slow to load, as we don't
    // want the previous Pokemon still there while the other is loading -- that's confusing to the user.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const image = new Image();
    image.src = getPokemonImageUrl(number, settings.difficulty);

    image.addEventListener('load', () => {
      // On higher difficulties, the images are smaller. This makes them bigger.
      if (Math.max(image.width, image.height) <= 200) {
        const multiplier = Math.floor(MAX_SPRITE_SIZE / image.width);
        canvas.width = image.width * multiplier;
        canvas.height = image.height * multiplier;
        // scales up sprites without smoothing so they look more crisp
        ctx.imageSmoothingEnabled = false;
      } else {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.imageSmoothingQuality = 'high';
      }

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      if (shouldSilhouette) {
        const rawImage = ctx.getImageData(0,0,canvas.width,canvas.height);

        for (let i = 0; i < rawImage.data.length; i += 4) {
          if(rawImage.data[i+3] >= 100) {
            rawImage.data[i] = 30;
            rawImage.data[i+1] = 30;
            rawImage.data[i+2] = 30;
            rawImage.data[i+3] = 255;
          } else {
            rawImage.data[i+3] = 0;
          }
        }

        ctx.putImageData(rawImage,0,0);
      }

      if (!gameState.answered) {
        dispatch(setPokemonLoaded());
      }
    });
  }, [number, shouldSilhouette, settings.difficulty]);

  return (
    <div
      className={classNames(
        'canvas-container',
        {
          'canvas-container-animated': gameState.answered && settings.difficulty !== DIFFICULTY.EASY,
          'canvas-container-sprite-mode': settings.difficulty === DIFFICULTY.ULTRA || settings.difficulty === DIFFICULTY.MASTER,
        },
      )}
    >
      <canvas ref={canvasRef}  />
    </div>
  );
};

export default PokemonSilhouette;
