import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { DIFFICULTY, type Difficulty, type GenerationId } from '../constants';
import type { LanguageId } from '../constants/lang';

export type SettingsState = {
  difficulty: Difficulty;
  generations: GenerationId[];
  forgivingSpellingEnabled: boolean;
  soundEnabled: boolean;
  language: LanguageId;
};

const initialState: SettingsState = {
  difficulty: DIFFICULTY.NORMAL,
  generations: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  forgivingSpellingEnabled: false,
  soundEnabled: false,
  language: 'en',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<Difficulty>) => {
      state.difficulty = action.payload;
    },
    toggleGeneration: (state, action: PayloadAction<GenerationId>) => {
      const index = state.generations.indexOf(action.payload);

      if (index > -1) {
        // Only remove the generation if it's not the last one
        if (state.generations.length > 1) {
          state.generations.splice(index, 1);
        }
      } else {
        state.generations.push(action.payload);
        state.generations.sort((a, b) => a - b);
      }
    },
    setSound: (state, action: PayloadAction<boolean>) => {
      state.soundEnabled = action.payload;
    },
    setForgivingSpellingEnabled: (state, action: PayloadAction<boolean>) => {
      state.forgivingSpellingEnabled = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LanguageId>) => {
      state.language = action.payload;
    },
    setAllSettings: (state, action: PayloadAction<SettingsState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {
  setDifficulty,
  toggleGeneration,
  setSound,
  setForgivingSpellingEnabled,
  setLanguage,
  setAllSettings,
} = settingsSlice.actions;
