import range from 'lodash/range';
import shuffle from 'lodash/shuffle';

import { DIFFICULTY, Difficulty, GENERATIONS } from '../constants';
import type { PokemonNumber } from '../constants/pokemon';
import { SettingsState } from '../store/settingsSlice';

export const getPokemonNumbers = (settings: SettingsState) => {
  const numbers = settings.generations
    .filter((gen) => GENERATIONS[gen].supportedDifficulties.includes(settings.difficulty))
    .flatMap((genToInc) => (
      range(GENERATIONS[genToInc].start, GENERATIONS[genToInc].end + 1)
    ));

  return {
    numbers: shuffle(numbers) as PokemonNumber[],
    generations: settings.generations,
  };
};

const IMAGE_DIRECTORIES = {
  [DIFFICULTY.EASY]: 'images/artwork/',
  [DIFFICULTY.NORMAL]: 'images/artwork/',
  [DIFFICULTY.ULTRA]: 'images/sprites/front/',
  [DIFFICULTY.MASTER]: 'images/sprites/back/',
  [DIFFICULTY.ELITE]: null,
} as const satisfies {
  [key in Difficulty]: string | null;
};

export const getPokemonImageUrl = (number: PokemonNumber, difficulty: Difficulty) => {
  return `${IMAGE_DIRECTORIES[difficulty]}${number}.png`;
};

export const getPokemonSoundUrl = (number: PokemonNumber) => {
  return 'sounds/cries/' + number + '.mp3';
};

export const preloadPokemonMedia = (number: PokemonNumber, difficulty: Difficulty, sound: boolean) => {
  if (difficulty !== DIFFICULTY.ELITE) {
    const img = new Image();
    img.src = getPokemonImageUrl(number, difficulty);
  }

  if (sound) {
    const audio = new Audio();
    audio.src = getPokemonSoundUrl(number);
  }
};
