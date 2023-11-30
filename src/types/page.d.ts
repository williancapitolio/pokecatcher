export type Page<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
};
