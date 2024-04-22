import { useCharactersByPage } from "@queries";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Logic = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isLoading, isError, isFetching } =
    useCharactersByPage();

  useEffect(() => {
    if (!inView || isLoading || isFetching || !hasNextPage || isError) {
      return;
    }
    fetchNextPage();
  }, [fetchNextPage, inView, isFetching, isLoading, hasNextPage, isError]);

  const pages = data?.pages;

  return { pages, isLoading, ref };
};

export default Logic;
