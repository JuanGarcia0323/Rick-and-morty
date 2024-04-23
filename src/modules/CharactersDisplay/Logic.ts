import { useCharactersByPage } from "@queries";
import { useEffect, useContext } from "react";
import { NotificationContext } from "@components/UseNotification/useNotification";
import { useInView } from "react-intersection-observer";

const Logic = () => {
  const { setNotification } = useContext(NotificationContext);
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isLoading, isError, isFetching } =
    useCharactersByPage();

  useEffect(() => {
    if (!inView || isLoading || isFetching || !hasNextPage || isError) {
      return;
    }
    fetchNextPage().then(() => setNotification!("Longer notification to test"));
  }, [
    fetchNextPage,
    inView,
    isFetching,
    isLoading,
    hasNextPage,
    isError,
    setNotification,
  ]);

  const characters = data?.pages.flatMap((p) => p.results);

  return { characters, isLoading, ref };
};

export default Logic;
