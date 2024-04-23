interface IPagination {
  pageParam?: number;
  name?: string;
  species?: string;
  type?: string;
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: string;
}

interface IRequestInfo<T> {
  info: Info;
  results: T;
}

export type { IPagination, IRequestInfo };
