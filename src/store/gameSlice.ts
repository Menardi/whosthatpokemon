import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { GenerationId } from '../constants';
import type { PokemonNumber } from '../constants/pokemon';

export type GameState = {
  pokemon: {
    numbers: PokemonNumber[];
    currentIndex: number;
    generations: GenerationId[];
  };
  initialized: boolean;
  answered: 'correct' | 'incorrect' | null;
  lastLoadedTime: number;
};

const initialState: GameState = {
  pokemon: {
    numbers: [],
    generations: [],
    currentIndex: 0,
  },
  initialized: false,
  answered: null,
  lastLoadedTime: Date.now(),
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setNewPokemonList: (state, action: PayloadAction<Omit<GameState['pokemon'], 'currentIndex'>>) => {
      state.pokemon = { ...action.payload, currentIndex: 0 };
      state.initialized = true;
    },
    goToNextPokemon: (state) => {
      state.pokemon.currentIndex += 1;
      state.answered = null;
    },
    setPokemonLoaded: (state) => {
      state.lastLoadedTime = Date.now();
    },
    revealPokemon: (state, action: PayloadAction<{ isCorrect: boolean }>) => {
      state.answered = action.payload.isCorrect ? 'correct' : 'incorrect';
    },
  },
});

export const { setNewPokemonList, goToNextPokemon, revealPokemon, setPokemonLoaded } = gameSlice.actions;
