interface IPagination {
  pageParam?: number;
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
