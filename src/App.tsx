import { useEffect, useLayoutEffect, useState } from 'preact/hooks';

import GameArea from './components/GameArea';
import LanguageSelectorFlags from './components/LanguageSelectorFlags';
import SettingsMenu from './components/SettingsMenu';
import StatsListener from './components/StatsListener';
import StatsMenu from './components/StatsMenu';
import { useAppDispatch } from './store';
import { resetPokemon } from './store/actions';
import { migrateToRedux } from './store/migrate';
import { useGameState, useLang, useSettings, useVisualViewportHeight } from './util/hooks';

const App = () => {
  const lang = useLang();

  const dispatch = useAppDispatch();

  const game = useGameState();
  const settings = useSettings();

  const [openedMenu, setOpenedMenu] = useState<'settings' | 'stats' | null>(null);
  const viewportHeight = useVisualViewportHeight();

  useLayoutEffect(() => {
    if (!game.initialized) {
      migrateToRedux();
      dispatch(resetPokemon());
    }
  }, []);

  // The viewportHeight tends to change when the virtual keyboard is opened on mobile. This useEffect
  // ensures that the game remains visible when the keyboard opens, especially on iOS.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [viewportHeight]);

  if (!game.initialized) return null;

  return (
    <div className="app" style={{ maxHeight: viewportHeight }}>
      <div className="app-inner">
        <SettingsMenu
          isOpen={openedMenu === 'settings'}
          onClose={() => setOpenedMenu(null)}
        />

        <div className="app-inner-main">
          <LanguageSelectorFlags />
          <GameArea onMenuOpen={setOpenedMenu} />
          <footer dangerouslySetInnerHTML={{ __html: lang.footer }} />
        </div>

        <StatsMenu
          isOpen={openedMenu === 'stats'}
          onClose={() => setOpenedMenu(null)}
        />
      </div>
      <StatsListener />
    </div>
  );
};

export default App;
