import { useEffect, useState } from 'preact/hooks';

import { TRANSLATIONS } from '../constants/lang';
import { RootState, useAppSelector } from '../store';

const settingsSelector = (state: RootState) => state.settings;
export const useSettings = () => useAppSelector(settingsSelector);

const gameStateSelector = (state: RootState) => state.game;
export const useGameState = () => useAppSelector(gameStateSelector);

const statsSelector = (state: RootState) => state.stats;
export const useStats = () => useAppSelector(statsSelector);

export const useLang = () => {
  const settings = useAppSelector(settingsSelector);
  return TRANSLATIONS[settings.language];
};

export const useCurrentPokemonNumber = () => {
  const game = useGameState();
  return game.pokemon.numbers[game.pokemon.currentIndex] ?? null;
};

/** The visual viewport resizes when the keyboard is opened on mobile. This hook gives us an easy
 *  way to react to these changes, so we can change the layout when the keyboard has been opened. */
export const useVisualViewportHeight = () => {
  const [height, setHeight] = useState(window.visualViewport!.height);

  useEffect(() => {
    const listener = () => {
      setHeight(window.visualViewport!.height);
    };

    window.visualViewport!.addEventListener('resize', listener);
    return () => window.visualViewport!.removeEventListener('resize', listener);
  }, []);

  return height;
};
