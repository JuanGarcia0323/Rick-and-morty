import { useParams } from "react-router-dom";
import { useMoreInfo, useEpisodes, useLocation, useCharacters } from "@queries";
import { ICharacter } from "@interfaces";

import Header from "@components/Header/Header";
import CardCarrousel from "@components/CardCarrousel/CardCarrousel";
import LoadingPanel from "@components/LoadingPanel/LoadingPanel";

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
        <div className="flex md:flex-col gap-4 items-center window-black p-4 h-2/6 md:h-full w-full md:w-auto">
          <img
            src={data?.image}
            className="rounded-md shadow-md w-40 h-40 md:w-auto"
          />
          <div className="flex flex-col gap-4 overflow-hidden h-full">
            <h4 className="md:text-2xl border-b-2 border-primary-300">
              Appearances:
            </h4>
            <ul className="flex flex-col overflow-y-auto overflow-x-hidden  h-full items-center gap-2 scrollbar-default px-2">
              {!!episodes &&
                episodes?.map(({ name }) => (
                  <li
                    key={name}
                    className="w-full p-2 window text-center text-sm tracking-tighter md:text-base md:tracking-normal"
                  >
                    {name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 w-full overflow-y-auto window-black h-full p-4 md:text-2xl ">
          <dl>
            <dt className="inline-block font-bold tracking-tight  md:text-4xl w-full border-b-2 border-primary-300 mb-2">
              {data?.name}
            </dt>
            {listData.map((key) => (
              <dd
                className="w-full text-ellipsis h-fit text-nowrap overflow-hidden text-primary-300 px-4 md:py-2"
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
