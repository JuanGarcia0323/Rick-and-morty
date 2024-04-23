import { useCharactersByPage } from "@queries";
import { useEffect, useState } from "react";
import useNotification from "@components/UseNotification/useNotification";
import { useInView } from "react-intersection-observer";
import { useDebounce } from "use-debounce";

const Logic = () => {
  const { ref, inView } = useInView();
  const [name, setName] = useState("");
  const [debounceName] = useDebounce(name, 200);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetching,
    error,
  } = useCharactersByPage({ name: debounceName });
  useNotification({ error: error?.message, title: "Error loading characters" });

  useEffect(() => {
    if (!inView || isLoading || isFetching || !hasNextPage || isError) {
      return;
    }
    fetchNextPage();
  }, [fetchNextPage, inView, isFetching, isLoading, hasNextPage, isError]);

  const characters = data?.pages.flatMap((p) => p.results);
  const handleChangeName = (name: string) => {
    setName(name);
  };

  return {
    characters,
    isLoading,
    ref,
    handleChangeName,
  };
};

export default Logic;
