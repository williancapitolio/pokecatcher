export function FindOnLocalStorage(key: string, id: number): boolean {
  const exists = localStorage.getItem(key);
  if (!exists) return false;

  const dataMatch = exists.includes(String(id));
  if (!dataMatch) return false;

  return true;
}
