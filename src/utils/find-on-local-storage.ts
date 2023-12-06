import { ParseNumberToString } from "./parse-number-to-string";

export function FindOnLocalStorage(key: string, id: number): boolean {
  const exists = localStorage.getItem(key);
  if (!exists) return false;

  const dataMatch = exists.includes(ParseNumberToString(id));
  if (!dataMatch) return false;

  return true;
}
