export function convertSecondsToTime(time: number) {
  if (!time) return '00:00:00';
  const needToAdd0 = (time: number | string) => String(time).length === 1;

  const hours = Math.floor(time / (60 * 60));

  const divisor_for_minutes = time % (60 * 60);
  const minutes = Math.floor(divisor_for_minutes / 60);

  const divisor_for_seconds = divisor_for_minutes % 60;
  const seconds = Math.ceil(divisor_for_seconds);

  const obj = {
    h: needToAdd0(hours) ? `0${hours}:` : `${hours}:` || '00:',
    m: needToAdd0(minutes) ? `0${minutes}:` : `${minutes}:` || '00:',
    s: needToAdd0(seconds) ? `0${seconds}` : `${seconds}` || '00',
  };
  const { h, m, s } = obj;

  return `${h}${m}${s}`;
}
