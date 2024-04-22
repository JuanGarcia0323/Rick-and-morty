import { useCharactersByPage } from "@queries";

const Logic = () => {
  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    isLoading,
    isError,
  } = useCharactersByPage();

  const characters = data?.pages[0]?.results!;

  return { characters, isLoading };
};

export default Logic;
