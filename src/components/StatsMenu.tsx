import { useLang, useSettings, useStats } from '../util/hooks';

/** These props are only used in the mobile view. The stats menu is always visible on desktop. */
type StatsMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const formatTime = (time: number) => {
  if (time === 0 || isNaN(time)) return '-';
  return (time / 1000).toPrecision(4);
};

const StatsMenu = ({ isOpen, onClose }: StatsMenuProps) => {
  const lang = useLang();
  const stats = useStats();
  const settings = useSettings();

  return (
    <>
      {isOpen && (
        <div className="open-menu-overlay" onClick={onClose} />
      )}
      <div className={`stats menu ${isOpen ? 'shown' : ''}`}>
        <h1>{lang.stats}</h1>

        <div className="menu-section">
          <h2>{`${lang.streak} (${lang[`difficulty-${settings.difficulty}`]})`}</h2>

          <div className="menu-section-inner">
            <div>
              <h3>{lang.current}</h3>
              <span className="stats-number">
                {stats.streaks.current[settings.difficulty]}
              </span>
            </div>

            <div>
              <h3>{lang.best}</h3>
              <span className="stats-number">
                {stats.streaks.best[settings.difficulty]}
              </span>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <h2>{`${lang.time} (${lang[`difficulty-${settings.difficulty}`]})`}</h2>

          <div className="menu-section-inner">
            <div>
              <h3>{lang.previous}</h3>
              <span className="stats-number">
                {formatTime(stats.times.previous.time)}
              </span>
            </div>

            <div>
              <h3>{lang.average}</h3>
              <span className="stats-number">
                {formatTime(stats.times.total[settings.difficulty].time / stats.times.total[settings.difficulty].guesses)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsMenu;
