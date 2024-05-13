export const formatStatTime = (time: number | null) => {
  if (time === null || time === 0 || isNaN(time)) return '-';
  return `${(time / 1000).toFixed(2)}s`;
};
