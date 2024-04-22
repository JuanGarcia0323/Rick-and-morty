import { useParams } from "react-router-dom";
import { useMoreInfo, useEpisodes, useLocation, useCharacters } from "@queries";
import { ICharacter } from "@interfaces";

import PortalIcon from "@components/PortalIcon/PortalIcon";
import SideBar from "@components/Header/SideBar";
import CardCarrousel from "@components/CardCarrousel/CardCarrousel";

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
  const listData: Array<keyof Omit<ICharacter, "origin" | "location">> = [
    "name",
    "gender",
    "status",
    "species",
  ];

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
      <div>
        <PortalIcon></PortalIcon>
      </div>
    );
  }

  const episodes = fetchEpisodes.map((d) => d.data!);
  const originResidents = fetchedOriginResidents.map((d) => d.data!);
  const locationResidents = fetchedLocationResidents.map((d) => d.data!);

  return (
    <div className="w-screen h-screen flex bg-gradient-to-tr from-30% via-65% from-green-500 via-teal-500 to-indigo-500">
      <div className="h-full w-full flex items-center justify-center text-white font-mono overflow-hidden">
        <div className="p-4 window w-4/5 h-4/5 flex gap-4">
          <div className="flex flex-col gap-4 window-black p-4 h-full w-fit">
            <img src={data?.image} className="rounded-md shadow-md" />
            <h4 className="text-2xl border-b-2 border-primary-300">
              Appearances:
            </h4>
            <ul className="flex flex-col overflow-y-auto overflow-x-hidden  h-full items-center gap-2 scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-primary-300 px-2">
              {!!episodes &&
                episodes?.map(({ name }) => (
                  <li key={name} className="w-full p-2 window text-center">
                    {name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-full overflow-hidden window-black p-4 text-2xl">
            <dl>
              <dt className="inline-block font-bold tracking-tight  text-4xl w-full border-b-2 border-primary-300 mb-2">
                {data?.name}
              </dt>
              {listData.map((key) => (
                <dd
                  className="w-full text-ellipsis h-fit text-nowrap overflow-hidden text-primary-300 px-4 py-2"
                  key={key}
                >
                  {key.toUpperCase()}: {data![key]}
                </dd>
              ))}
            </dl>
            <CardCarrousel
              className="h-full"
              title={`Origin: ${origin.data?.name}`}
              data={originResidents}
            />
            <CardCarrousel
              className="h-full"
              title={`Location: ${location.data?.name}`}
              data={locationResidents}
            />
          </div>
        </div>
      </div>
      <SideBar></SideBar>
    </div>
  );
};

export default MoreInfo;
