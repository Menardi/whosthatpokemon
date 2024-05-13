import { useMemo, useState } from 'preact/hooks';

import { POKEMON_NAMES } from '../constants/pokemon';
import { useGameState, useLang, useSettings, useStats } from '../util/hooks';
import { formatStatTime } from '../util/stats';
import StatsModal from './StatsModal';

/** These props are only used in the mobile view. The stats menu is always visible on desktop. */
type StatsMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const StatsMenu = ({ isOpen, onClose }: StatsMenuProps) => {
  const lang = useLang();
  const stats = useStats();
  const settings = useSettings();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const previousPokemonStats = useMemo(() => {
    if (stats.lastSeen.length === 0) return null;

    const number = stats.lastSeen[0].pokemon;
    if (number === 0) return null;

    const pokemonStats = stats.pokemon[number];
    if (!pokemonStats) return null;

    return {
      name: POKEMON_NAMES.find((pkmn) => pkmn.number === number)!.names[settings.language],
      timesSeen: pokemonStats.timesSeen,
      percentage: Math.ceil((pokemonStats.timesCorrect / pokemonStats.timesSeen) * 100),
      timeTaken: stats.lastSeen[0].time,
      averageTime: pokemonStats.timesCorrect > 0 ? pokemonStats.totalTime / pokemonStats.timesCorrect : null,
    };
  }, [stats, settings.language]);

  return (
    <>
      {isOpen && (
        <div className="open-menu-overlay" onClick={onClose} />
      )}
      <div className={`stats menu ${isOpen ? 'shown' : ''}`}>
        <h1>{lang.stats}</h1>

        <div className="menu-section">
          <h2>{lang.streak}</h2>

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

        {previousPokemonStats !== null && (
          <div className="menu-section">
            <h2>{previousPokemonStats.name}</h2>

            <div className="menu-section-inner">
              <div>
                <h3>{lang.statsTimesCorrect}</h3>
                <span className="stats-number">
                  {`${previousPokemonStats.percentage}%`}
                </span>
              </div>

              <div>
                <h3>{lang.statsTime}</h3>
                <span className="stats-number">
                  {formatStatTime(previousPokemonStats.timeTaken)}
                </span>
              </div>

              <div>
                <h3>{lang.statsAverageTime}</h3>
                <span className="stats-number">
                  {formatStatTime(previousPokemonStats.averageTime)}
                </span>
              </div>
            </div>

            <button
              className="see-all-stats-button"
              onClick={() => setIsModalOpen(true)}
            >
              {`${lang.seeAllStats} >`}
            </button>
          </div>
        )}

        {!!settings.pendingSettings && (
          <div className="menu-section">
            <div className="menu-section-inner streak-note">
              {lang['streakInfo']}
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <StatsModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default StatsMenu;
