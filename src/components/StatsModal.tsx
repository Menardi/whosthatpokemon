import { useCallback, useEffect, useMemo } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

import { POKEMON_NAMES } from '../constants/pokemon';
import { useAppDispatch, useAppSelector } from '../store';
import { StatsTableKey, setStatsTableSort } from '../store/statsSlice';
import { useLang, useSettings, useStats } from '../util/hooks';
import { formatStatTime } from '../util/stats';
import styles from './css/StatsModal.module.css';

function isNotNull<T> (arg: T): arg is Exclude<T, null> {
  return arg !== null;
}

type StatsModalProps = {
  onClose: () => void;
};

const StatsModal = ({ onClose }: StatsModalProps) => {
  const dispatch = useAppDispatch();

  const lang = useLang();
  const settings = useSettings();
  const stats = useStats();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const tableData = useMemo(() => {
    const sortSign = stats.tableSort.ascending ? -1 : 1;

    const data = Object.values(POKEMON_NAMES)
      .map((pokemon) => {
        const pokemonStats = stats.pokemon[pokemon.number];

        if (!pokemonStats) return null;

        return {
          [StatsTableKey.number]: pokemon.number,
          [StatsTableKey.name]: pokemon.names[settings.language],
          [StatsTableKey.correct]: pokemonStats ? Math.ceil((pokemonStats.timesCorrect / pokemonStats.timesSeen) * 100) : -1,
          [StatsTableKey.time]: pokemonStats && pokemonStats.timesCorrect > 0 ? pokemonStats.totalTime / pokemonStats.timesCorrect : -1,
          [StatsTableKey.seen]: pokemonStats?.timesSeen ?? 0,
        };
      })
      .filter(isNotNull)
      .sort((row1, row2) => {
        return row2[stats.tableSort.key] > row1[stats.tableSort.key] ? sortSign : -sortSign;
      });

    return data;
  }, [stats]);

  const onHeaderClick = useCallback((ev: JSXInternal.TargetedMouseEvent<HTMLTableCellElement>) => {
    const key = ev.currentTarget.getAttribute('data-sort-key') as StatsTableKey;
    const ascending = stats.tableSort.key === key ? !stats.tableSort.ascending : true;

    dispatch(setStatsTableSort({ key, ascending }));
  }, [dispatch, stats.tableSort]);

  return (
    <div className={styles.container}>
      <div className={styles.backdrop} onClick={onClose} />

      <div className={styles.content}>
        <table className={styles.table} cellSpacing={0}>
          <thead>
            <tr data-sort-ascending={stats.tableSort.ascending}>
              <th
                data-sort-key={StatsTableKey.number}
                data-active={stats.tableSort.key === StatsTableKey.number}
                onClick={onHeaderClick}
              >
                {lang.statsNumber}
              </th>
              <th
                data-sort-key={StatsTableKey.name}
                data-active={stats.tableSort.key === StatsTableKey.name}
                onClick={onHeaderClick}
              >
                {lang.statsName}
              </th>
              <th
                data-sort-key={StatsTableKey.correct}
                data-active={stats.tableSort.key === StatsTableKey.correct}
                onClick={onHeaderClick}
              >
                {lang.statsTimesCorrect}
              </th>
              <th
                data-sort-key={StatsTableKey.time}
                data-active={stats.tableSort.key === StatsTableKey.time}
                onClick={onHeaderClick}
              >
                {lang.statsAverageTime}
              </th>
              <th
                data-sort-key={StatsTableKey.seen}
                data-active={stats.tableSort.key === StatsTableKey.seen}
                onClick={onHeaderClick}
              >
                {lang.statsTimesSeen}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => {
              return (
                <tr key={data.number}>
                  <td>{`${data.number.toString().padStart(3, '0')}`}</td>
                  <td>{data.name}</td>
                  <td>{data.correct > -1 ? `${data.correct}%` : '-'}</td>
                  <td>{data.time > - 1 ? formatStatTime(data.time) : '-'}</td>
                  <td>{data.seen}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default StatsModal;
