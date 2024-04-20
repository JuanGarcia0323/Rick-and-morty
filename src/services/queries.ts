import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
import { getCharacters } from "./api";

export function useCharacters() {
  return useInfiniteQuery({
    queryKey: ["getCharacters"],
    queryFn: getCharacters,
    placeholderData: keepPreviousData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage.info.next) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (firstPage, _, firstPageParam) => {
      if (!firstPage.info.prev) {
        return undefined;
      }
      return firstPageParam + 1;
    },
  });
}
