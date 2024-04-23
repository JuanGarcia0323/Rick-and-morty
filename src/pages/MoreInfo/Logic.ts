import { useParams } from "react-router-dom";
import { useMoreInfo, useEpisodes, useLocation, useCharacters } from "@queries";
import { characteristics } from "@interfaces";
import useNotification from "@components/UseNotification/useNotification";
const getId = (url?: string) => {
  if (!url) {
    return;
  }
  const splited = url.split("/");
  const number = parseInt(splited[splited.length - 1]);
  return isNaN(number) ? undefined : number;
};

const extractId = (urls?: string[]) =>
  urls?.map((link) => getId(link)!).filter((e) => e);

const Logic = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useMoreInfo(+id!);
  const listData: characteristics = ["gender", "status", "species"];

  const episodesIds = extractId(data?.episode);
  const fetchEpisodes = useEpisodes(episodesIds);
  const location = useLocation(getId(data?.location.url));
  const locationResidentsIds = extractId(location.data?.residents);
  const fetchedLocationResidents = useCharacters(locationResidentsIds);
  const origin = useLocation(getId(data?.origin.url));
  const originResidentsIds = extractId(origin.data?.residents);
  const fetchedOriginResidents = useCharacters(originResidentsIds);

  const episodes = fetchEpisodes.map((d) => d.data);
  const originResidents = fetchedOriginResidents.map((d) => d.data);
  const locationResidents = fetchedLocationResidents.map((d) => d.data);

  useNotification({ error: error?.message, title: "Error loading character" });
  useNotification({
    error: fetchEpisodes.find((e) => e.error)?.error?.message,
    title: "Error loading episodes",
  });
  useNotification({
    error: location.error?.message,
    title: "Error loading location",
  });
  useNotification({
    error: origin.error?.message,
    title: "Error loading location",
  });
  useNotification({
    error: fetchedLocationResidents.find((e) => e.error)?.error?.message,
    title: "Error loading location residents",
  });
  useNotification({
    error: fetchedOriginResidents.find((e) => e.error)?.error?.message,
    title: "Error loading origin residents",
  });

  return {
    listData,
    episodes,
    originResidents,
    locationResidents,
    data,
    origin,
    location,
    loadingEpisodes: isLoading || fetchEpisodes.some((a) => a.isLoading),
    locationResidentsLoading:
      isLoading ||
      location.isLoading ||
      fetchedLocationResidents.some((a) => a.isLoading),
    originResidentsLoading:
      isLoading ||
      origin.isLoading ||
      fetchedOriginResidents.some((a) => a.isLoading),
  };
};

export default Logic;
