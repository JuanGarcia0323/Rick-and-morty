import { useCharacters } from "@queries";

const Logic = () => {
  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    isLoading,
    isError,
  } = useCharacters();

  const characters = data?.pages[0]?.results!;

  return { characters, isLoading };
};

export default Logic;
