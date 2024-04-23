import { useCharactersByPage } from "@queries";
import { useEffect, useState } from "react";
import useNotification from "@components/UseNotification/useNotification";
import { useInView } from "react-intersection-observer";
import { useDebounce } from "use-debounce";
import { IFilterData } from "@interfaces";

const Logic = () => {
  const { ref, inView } = useInView();
  const [name, setName] = useState("");
  const [species, setSpicies] = useState("");
  const [type, setType] = useState("");
  const [debounceName] = useDebounce(name, 200);
  const [debounceSpecies] = useDebounce(species, 200);
  const [debounceType] = useDebounce(type, 200);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetching,
    error,
  } = useCharactersByPage({
    name: debounceName,
    species: debounceSpecies,
    type: debounceType,
  });
  useNotification({ error: error?.message, title: "Error loading characters" });

  useEffect(() => {
    if (!inView || isLoading || isFetching || !hasNextPage || isError) {
      return;
    }
    fetchNextPage();
  }, [fetchNextPage, inView, isFetching, isLoading, hasNextPage, isError]);
  const characters = data?.pages.flatMap((p) => p.results);
  const filter: IFilterData[] = [
    { onChange: setName, title: "Name:" },
    { onChange: setType, title: "Type:" },
    { onChange: setSpicies, title: "Species:" },
  ];

  return {
    characters,
    isLoading,
    ref,
    filter,
  };
};

export default Logic;
