import { useCharactersByPage } from "@queries";
import { useState } from "react";

const Logic = () => {
  const [page, setPage] = useState(0);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    hasPreviousPage,
  } = useCharactersByPage();

  const characters = data?.pages[page]?.results!;
  const handleScrollDown = () => {
    if (!hasNextPage) {
      return;
    }
    fetchNextPage().then(() => {
      setPage((page) => page + 1);
    });
  };

  const handleSrollUp = () => {
    if (hasPreviousPage) {
      return;
    }
    setPage((page) => page - 1);
  };

  return { characters, isLoading, handleSrollUp, handleScrollDown };
};

export default Logic;
