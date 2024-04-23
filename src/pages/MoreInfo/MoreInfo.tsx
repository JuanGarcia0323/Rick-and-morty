import { useParams } from "react-router-dom";
import { useMoreInfo, useEpisodes, useLocation, useCharacters } from "@queries";
import { characteristics } from "@interfaces";

import SidebarMoreInfo from "@components/SidebarMoreInfo/SideBarMoreInfo";
import Header from "@components/Header/Header";
import CardCarrousel from "@components/CardCarrousel/CardCarrousel";
import LoadingPanel from "@components/LoadingPanel/LoadingPanel";
import Characteristics from "@components/Characteristics/Characteristics";

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

const MoreInfo = () => {
  const { id } = useParams();
  const { data, isLoading } = useMoreInfo(+id!);
  const listData: characteristics = ["gender", "status", "species"];

  const episodesIds = extractId(data?.episode);
  const fetchEpisodes = useEpisodes(episodesIds);
  const location = useLocation(getId(data?.location.url));
  const locationResidentsIds = extractId(location.data?.residents);
  const fetchedLocationResidents = useCharacters(locationResidentsIds);
  const origin = useLocation(getId(data?.origin.url));
  const originResidentsIds = extractId(origin.data?.residents);
  const fetchedOriginResidents = useCharacters(originResidentsIds);

  if (
    isLoading ||
    fetchEpisodes.some((e) => e.isLoading) ||
    location.isLoading ||
    origin.isLoading ||
    fetchedLocationResidents.some((d) => d.isLoading) ||
    fetchedOriginResidents.some((d) => d.isLoading)
  ) {
    return (
      <div className="w-screen h-screen p-4">
        <LoadingPanel></LoadingPanel>
      </div>
    );
  }

  const episodes = fetchEpisodes.map((d) => d.data!);
  const originResidents = fetchedOriginResidents.map((d) => d.data!);
  const locationResidents = fetchedLocationResidents.map((d) => d.data!);

  return (
    <div className="w-screen h-screen flex flex-col md:items-center justify-center">
      <Header></Header>
      <div className="max-h-full text-white font-mono overflow-hidden p-4 window flex flex-col w-full h-full md:flex-row md:w-4/5 md:h-4/5 gap-4">
        <SidebarMoreInfo episodes={episodes} image={data!.image} />
        <div className="flex flex-col gap-2 md:gap-4 w-full overflow-y-auto window-black h-full p-4 md:text-2xl ">
          <Characteristics
            characteristics={listData}
            data={data!}
          ></Characteristics>
          <CardCarrousel
            className="h-full"
            title={`Origin: ${origin.data?.name}`}
            data={originResidents}
          />
          {location.data?.name === origin.data?.name || (
            <CardCarrousel
              className="h-full"
              title={`Location: ${location.data?.name}`}
              data={locationResidents}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
