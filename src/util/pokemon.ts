import { DIFFICULTY, Difficulty, GENERATIONS } from '../constants';
import type { PokemonNumber } from '../constants/pokemon';
import { SettingsState } from '../store/settingsSlice';

const getGenerationNumbers = (from: PokemonNumber, to: PokemonNumber): PokemonNumber[] => {
  return [...Array((to + 1) - from).keys()].map(k => k + from as PokemonNumber);
};

/** Shuffles an array of numbers using a Fisher-Yates shuffle. This function creates a
 *  copy of the given array, rather than modifying it in place.
 *  Adapted from code at https://bost.ocks.org/mike/shuffle/ */
const getShuffledNumbers = (array: PokemonNumber[]) => {
  const numbers = array.slice(0);
  let currentIndex = numbers.length;

  while (currentIndex) {
    const randomIndex = Math.floor(Math.random() * currentIndex--);

    const valueToSwap = numbers[currentIndex];
    numbers[currentIndex] = numbers[randomIndex];
    numbers[randomIndex] = valueToSwap;
  }

  return numbers;
};

export const getPokemonNumbers = (options: Pick<SettingsState, 'generations' | 'difficulty'>) => {
  const numbers = options.generations
    .filter((gen) => GENERATIONS[gen].supportedDifficulties.includes(options.difficulty))
    .flatMap((genToInc) => (
      getGenerationNumbers(GENERATIONS[genToInc].start, GENERATIONS[genToInc].end) as PokemonNumber[]
    ));

  return {
    numbers: getShuffledNumbers(numbers),
    generations: options.generations,
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
