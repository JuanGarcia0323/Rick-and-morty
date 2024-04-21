import {
  useInfiniteQuery,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { getCharacters, getMoreInfo } from "./api";

export const useCharacters = () => {
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
};

export const useMoreInfo = (id: number) => {
  return useQuery({
    queryKey: ["moreInfo", id],
    queryFn: () => getMoreInfo(id),
  });
};
