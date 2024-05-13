import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { DIFFICULTY, type Difficulty, type GenerationId } from '../constants';
import type { LanguageId } from '../constants/lang';

export type SettingsState = {
  difficulty: Difficulty;
  generations: GenerationId[];
  forgivingSpellingEnabled: boolean;
  soundEnabled: boolean;
  language: LanguageId;
  /** Settings to be applied once the current Pokémon has been guessed */
  pendingSettings: {
    difficulty?: Difficulty;
    generations?: GenerationId[];
  } | null,
};

const initialState: SettingsState = {
  difficulty: DIFFICULTY.NORMAL,
  generations: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  forgivingSpellingEnabled: false,
  soundEnabled: false,
  language: 'en',
  pendingSettings: null,
};

const areGenerationsEqual = (g1?: GenerationId[], g2?: GenerationId[]) => {
  if (!g1 || !g2) return false;
  if (g1.length !== g2.length) return false;

  const gen1 = g1.slice().sort();
  const gen2 = g2.slice().sort();

  return gen1.every((genId, index) => genId === gen2[index]);
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<Difficulty>) => {
      state.pendingSettings = {
        ...state.pendingSettings,
        difficulty: action.payload,
      };

      // If this change reverts back to the original difficulty, remove this pending setting
      // and clear pendingSettings altogether if nothing else is pending.
      if (state.pendingSettings.difficulty === state.difficulty) {
        delete state.pendingSettings.difficulty;

        if (Object.keys(state.pendingSettings).length === 0) {
          state.pendingSettings = null;
        }
      }
    },
    toggleGeneration: (state, action: PayloadAction<GenerationId>) => {
      const generations = (state.pendingSettings?.generations ?? state.generations).slice(0);
      const index = generations.indexOf(action.payload);

      if (index > -1) {
        // Only remove the generation if it's not the last one
        if (generations.length > 1) {
          generations.splice(index, 1);
        }
      } else {
        generations.push(action.payload);
        generations.sort((a, b) => a - b);
      }

      state.pendingSettings = {
        ...state.pendingSettings,
        generations,
      };

      // If this change reverts back to the original generations, remove this pending setting
      // and clear pendingSettings altogether if nothing else is pending.
      if (areGenerationsEqual(state.generations, state.pendingSettings.generations)) {
        delete state.pendingSettings.generations;

        if (Object.keys(state.pendingSettings).length === 0) {
          state.pendingSettings = null;
        }
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
    processPendingSettings: (state) => {
      state.difficulty = state.pendingSettings?.difficulty ?? state.difficulty;
      state.generations = state.pendingSettings?.generations ?? state.generations;
      state.pendingSettings = null;
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
  processPendingSettings,
} = settingsSlice.actions;
