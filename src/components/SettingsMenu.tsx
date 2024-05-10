import classNames from 'classnames';

import { DIFFICULTY, GENERATIONS } from '../constants';
import { useAppDispatch } from '../store';
import { setDifficulty, setForgivingSpellingEnabled, setSound, toggleGeneration } from '../store/settingsSlice';
import { useLang, useSettings } from '../util/hooks';

/** These props are only used in the mobile view. The settings menu is always visible on desktop. */
type SettingsMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SettingsMenu = ({ isOpen, onClose }: SettingsMenuProps) => {
  const dispatch = useAppDispatch();
  const lang = useLang();

  const settings = useSettings();

  return (
    <>
      {isOpen && (
        <div className="open-menu-overlay" onClick={onClose} />
      )}
      <div className={`settings menu ${isOpen ? 'shown' : ''}`}>
        <h1>{lang.settings}</h1>

        <div className="menu-section">
          <h2>{lang.generation}</h2>

          <div className="menu-section-inner settings-generations-grid">
            {Object.values(GENERATIONS).map((generation) => {
              const isActive = settings.generations.includes(generation.id);
              const willBeActiveNextRound = !!(
                (!settings.pendingSettings?.generations && isActive)
                || settings.pendingSettings?.generations?.includes(generation.id)
              );

              return (
                <button
                  onClick={() => dispatch(toggleGeneration(generation.id))}
                  className={classNames({
                    selected: isActive && willBeActiveNextRound,
                    pending: isActive !== willBeActiveNextRound,
                  })}
                  title={generation.games}
                  key={generation.id}
                >
                  {generation.id}
                </button>
              );
            })}
          </div>
        </div>

        <div className="menu-section">
          <h2>{lang.difficulty}</h2>

          <div className="menu-section-inner">
            {Object.values(DIFFICULTY).map((difficulty) => {
              const isActive = difficulty === settings.difficulty;
              const willBecomeActiveNextRound = difficulty === settings.pendingSettings?.difficulty;

              return (
                <button
                  onClick={() => dispatch(setDifficulty(difficulty))}
                  className={classNames({
                    selected: isActive,
                    pending: willBecomeActiveNextRound,
                  })}
                >
                  {lang[`difficulty-${difficulty}`]}
                </button>
              );
            })}
          </div>
        </div>

        {settings.language === 'en' && (
          <div className="menu-section">
            <h2>{lang.spelling}</h2>

            <div className="menu-section-inner">
              <button
                onClick={() => dispatch(setForgivingSpellingEnabled(false))}
                className={`${!settings.forgivingSpellingEnabled ? 'selected' : ''}`}
              >
                {lang['spelling-exact']}
              </button>
              <button
                onClick={() => dispatch(setForgivingSpellingEnabled(true))}
                className={`${settings.forgivingSpellingEnabled ? 'selected' : ''}`}
              >
                {lang['spelling-forgiving']}
              </button>
            </div>
          </div>
        )}

        <div className="menu-section">
          <h2>{lang.sound}</h2>

          <div className="menu-section-inner settings-list-sound">
            <button
              onClick={() => dispatch(setSound(false))}
              className={`${!settings.soundEnabled ? 'selected' : ''}`}
            >
              {lang.off}
            </button>
            <button
              onClick={() => dispatch(setSound(true))}
              className={`${settings.soundEnabled ? 'selected' : ''}`}
            >
              {lang.on}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsMenu;
