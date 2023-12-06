export function GetLocalStorageData<T>(key: string, empatyData: T): T {
  const data = localStorage.getItem(key);
  if (!data) return empatyData;
  return JSON.parse(data);
}
