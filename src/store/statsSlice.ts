import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Difficulty } from '../constants';
import { PokemonNumber } from '../constants/pokemon';

export type StatsPerDifficultyArray<T> = [T, T, T, T, T];

/** If the time taken is longer than this number of milliseconds, round it down
 *  to avoid skewing stats with huge numbers. */
const MAX_TIME_TO_RECORD = 90000;

type SingleTimeStat = {
  time: number;
  pokemon: PokemonNumber | 0;
};

type AverageTimeStat = {
  time: number;
  guesses: number;
};

type PokemonStat = {
  timesSeen: number;
  timesCorrect: number;
  totalTime: number;
};

export type StatsState = {
  streaks: {
    current: StatsPerDifficultyArray<number>;
    best: StatsPerDifficultyArray<number>;
  },
  times: {
    best: StatsPerDifficultyArray<SingleTimeStat>,
    total: StatsPerDifficultyArray<AverageTimeStat>;
    previous: SingleTimeStat;
  },
  pokemon: {
    [num in PokemonNumber]?: PokemonStat;
  }
};

const initialState: StatsState = {
  streaks: {
    current: [0, 0, 0, 0, 0],
    best: [0, 0, 0, 0, 0],
  },
  times: {
    best: [
      { time: 0, pokemon: 0 },
      { time: 0, pokemon: 0 },
      { time: 0, pokemon: 0 },
      { time: 0, pokemon: 0 },
      { time: 0, pokemon: 0 },
    ],
    total: [
      { time: 0, guesses: 0 },
      { time: 0, guesses: 0 },
      { time: 0, guesses: 0 },
      { time: 0, guesses: 0 },
      { time: 0, guesses: 0 },
    ],
    previous: { time: 0, pokemon: 0 },
  },
  pokemon: {},
};

type AnswerPayload = {
  isCorrect: boolean;
  difficulty: Difficulty;
  timeStarted: number;
  pokemonNumber: PokemonNumber;
};

const DEFAULT_POKEMON_STAT: PokemonStat = {
  timesCorrect: 0,
  timesSeen: 0,
  totalTime: 0,
};

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setAnswered: (state, { payload }: PayloadAction<AnswerPayload>) => {
      const timeTaken = Math.min(Date.now() - payload.timeStarted, MAX_TIME_TO_RECORD);

      // Handle times and streaks
      if (payload.isCorrect) {
        state.streaks.current[payload.difficulty] += 1;

        if (state.streaks.current[payload.difficulty] > state.streaks.best[payload.difficulty]) {
          state.streaks.best[payload.difficulty] = state.streaks.current[payload.difficulty];
        }

        const timeStat: SingleTimeStat = {
          time: timeTaken,
          pokemon: payload.pokemonNumber,
        };

        state.times.previous = timeStat;

        if (timeStat.time < state.times.best[payload.difficulty].time) {
          state.times.best[payload.difficulty] = timeStat;
        }

        state.times.total[payload.difficulty].time += timeStat.time;
        state.times.total[payload.difficulty].guesses += 1;
      } else {
        state.streaks.current[payload.difficulty] = 0;
      }

      // Handle Pokemon-specific stats
      const pokemonStat: PokemonStat = {
        ...DEFAULT_POKEMON_STAT,
        ...state.pokemon[payload.pokemonNumber],
      };

      pokemonStat.timesSeen += 1;
      pokemonStat.totalTime += timeTaken;

      if (payload.isCorrect) {
        pokemonStat.timesCorrect += 1;
      }

      state.pokemon[payload.pokemonNumber] = pokemonStat;
    },
    setAllStats: (state, action: PayloadAction<StatsState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setAllStats, setAnswered } = statsSlice.actions;
