interface IPagination {
  pageParam?: number;
  name?: string;
  species?: string;
  type?: string;
  status?: "alive" | "dead" | "unknown";
  gender?: "female" | "male" | "genderless" | "unknown";
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
