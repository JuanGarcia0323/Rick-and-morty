import { useCharactersByPage } from "@queries";
import { useState, WheelEvent } from "react";
import { throttle } from "throttle-debounce";

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
  const handleScroll = (e: WheelEvent<HTMLDivElement>) => {
    console.log(e.deltaY);
    throttle(
      100,
      () => {
        console.log("scrolling");
        // e.deltaY > 0 ? handleScrollDown() : handleSrollUp();
      },
      { noLeading: false, noTrailing: false }
    );
  };
  const handleScrollDown = () => {
    console.log("test");
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

  return { characters, isLoading, handleScroll };
};

export default Logic;
