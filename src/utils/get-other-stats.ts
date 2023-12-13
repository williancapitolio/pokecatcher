export function GetOtherStats(
  base: number,
  iv: 0 | 31,
  ev: 0 | 252,
  level: 100,
  signal: 0.9 | 1.1
): number {
  let result = ((2 * base + iv + ev / 4) * level) / 100 + 5;

  result *= signal;

  return Math.floor(result);
}

