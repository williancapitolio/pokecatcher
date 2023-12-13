export function GetHpStat(
  base: number,
  iv: 0 | 31,
  ev: 0 | 252,
  level: 100
): number {
  return Math.floor(((2 * base + iv + ev / 4) * level) / 100 + level + 10);
}
