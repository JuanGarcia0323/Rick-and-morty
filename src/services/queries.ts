import {
  useInfiniteQuery,
  keepPreviousData,
  useQuery,
  useQueries,
} from "@tanstack/react-query";
import {
  getCharactersByPage,
  getCharacter,
  getEpisode,
  getLocation,
} from "./api";

export const useCharactersByPage = () => {
  return useInfiniteQuery({
    queryKey: ["getCharacters"],
    queryFn: getCharactersByPage,
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

export const useCharacter = (id: number) => {
  return useQuery({
    queryKey: ["moreInfo", id],
    queryFn: () => getCharacter(id),
  });
};

export const useCharacters = (ids?: number[]) => {
  return useQueries({
    queries: (ids ?? []).map((id) => ({
      queryKey: ["episode", id],
      queryFn: () => getCharacter(id),
    })),
  });
};

export const useMoreInfo = (id: number) => {
  return useQuery({
    queryKey: ["moreInfo", id],
    queryFn: () => getCharacter(id),
  });
};

export const useEpisode = (id: number) => {
  return useQuery({
    queryKey: ["episodes", id],
    queryFn: () => getEpisode(id),
  });
};

export const useEpisodes = (ids?: number[]) => {
  return useQueries({
    queries: (ids ?? []).map((id) => ({
      queryKey: ["episode", id],
      queryFn: () => getEpisode(id),
    })),
  });
};

export const useLocation = (id?: number) => {
  return useQuery({
    queryKey: ["location", id],
    queryFn: () => getLocation(id!),
    enabled: !!id,
  });
};
