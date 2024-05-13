import type { PokemonNumber } from './pokemon';

export const DIFFICULTY = {
  EASY: 4,
  NORMAL: 0,
  ULTRA: 1,
  MASTER: 2,
  ELITE: 3,
} as const;

export type DifficultyKey = keyof typeof DIFFICULTY;
export type Difficulty = typeof DIFFICULTY[DifficultyKey];

export type GenerationId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Generation = {
  id: GenerationId;
  start: PokemonNumber;
  end: PokemonNumber;
  supportedDifficulties: readonly Difficulty[];
  games: string;
};

export const GENERATIONS: { [key in GenerationId]: Generation } = {
  1: {
    id: 1,
    start: 1,
    end: 151,
    supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    games: 'Red, Blue, & Yellow',
  },
  2: {
    id: 2,
    start: 152,
    end: 251,
    supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    games: 'Gold, Silver, & Crystal',
  },
  3: {
    id: 3,
    start: 252,
    end: 386,
    supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    games: 'Ruby, Sapphire, & Emerald',
  },
  4: {
    id: 4,
    start: 387,
    end: 493,
    supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    games: 'Diamond, Pearl, & Platinum',
  },
  5: {
    id: 5,
    start: 494,
    end: 649,
    supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    games: 'Black & White',
  },
  6: {
    id: 6,
    start: 650,
    end: 721,
    supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    games: 'X & Y',
  },
  7: {
    id: 7,
    start: 722,
    end: 807,
    supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ULTRA, DIFFICULTY.MASTER, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    games: 'Sun, Moon, Ultra Sun, & Ultra Moon',
  },
  8: {
    id: 8,
    // Technically gen 8 starts at 810, but 808 and 809 don't have sprites, and so are closer to being gen 8
    // than gen 7 (they were introduced in Let's Go)
    start: 808,
    end: 905,
    supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    games: 'Let\'s Go, Sword, Shield, & Legends: Arceus',
  },
  9: {
    id: 9,
    start: 906,
    end: 1025,
    supportedDifficulties: [DIFFICULTY.NORMAL, DIFFICULTY.ELITE, DIFFICULTY.EASY],
    games: 'Scarlet & Violet',
  },
} as const;

export const MILLISECONDS_BETWEEN_POKEMON = 3000;
