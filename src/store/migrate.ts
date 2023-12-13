import { store } from '.';
import { Difficulty, GenerationId } from '../constants';
import type { LanguageId } from '../constants/lang';
import { PokemonNumber } from '../constants/pokemon';
import { SettingsState, setAllSettings } from './settingsSlice';
import { StatsPerDifficultyArray, StatsState, setAllStats } from './statsSlice';

const SETTINGS_LS_KEY = 'wtp_settings';
const RECORDS_LS_KEY = 'wtp_records';
const MIGRATION_COMPLETE_LS_KEY = 'redux_migration_complete';

type LegacySettings = {
  difficulty: Difficulty;
  generations: GenerationId[];
  sound: boolean;
  forgivingSpelling: boolean;
  language: LanguageId;
};

type LegacyStats = {
  streaks: StatsPerDifficultyArray<number>;
  bests: {
    time: StatsPerDifficultyArray<number>;
    pokemonId: StatsPerDifficultyArray<PokemonNumber | 0>;
  };
  totals: {
    time: StatsPerDifficultyArray<number>;
    guesses: StatsPerDifficultyArray<number>;
  }
};

/** Migrates data from the old manual storage to Redux */
export const migrateToRedux = () => {
  if (localStorage.getItem(MIGRATION_COMPLETE_LS_KEY)) return;

  const legacySettingsStr = localStorage.getItem(SETTINGS_LS_KEY);

  if (legacySettingsStr) {
    const legacySettings = JSON.parse(legacySettingsStr) as LegacySettings;
    const migratedSettings: SettingsState = {
      difficulty: legacySettings.difficulty,
      generations: legacySettings.generations,
      soundEnabled: legacySettings.sound,
      forgivingSpellingEnabled: legacySettings.forgivingSpelling,
      language: legacySettings.language,
    };

    store.dispatch(setAllSettings(migratedSettings));
  }

  const legacyStatsStr = localStorage.getItem(RECORDS_LS_KEY);

  if (legacyStatsStr) {
    const legacyStats = JSON.parse(legacyStatsStr) as LegacyStats;
    const migratedStats: StatsState = {
      streaks: {
        current: [0, 0, 0, 0, 0],
        best: legacyStats.streaks,
      },
      times: {
        best: legacyStats.bests.time.map((time, index) => ({
          time,
          pokemon: legacyStats.bests.pokemonId[index],
        })) as StatsState['times']['best'],
        total: legacyStats.totals.time.map((time, index) => ({
          time,
          guesses: legacyStats.totals.guesses[index],
        })) as StatsState['times']['total'],
        previous: { time: 0, pokemon: 0 },
      },
      pokemon: {},
    };

    store.dispatch(setAllStats(migratedStats));
  }

  localStorage.setItem(MIGRATION_COMPLETE_LS_KEY, 'true');
};
