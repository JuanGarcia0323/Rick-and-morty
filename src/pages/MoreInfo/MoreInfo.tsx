import { useParams } from "react-router-dom";
import { useMoreInfo } from "@queries";
import { ICharacter } from "@interfaces";

import PortalIcon from "@components/PortalIcon/PortalIcon";
import SideBar from "@components/Header/SideBar";

const MoreInfo = () => {
  const { id } = useParams();
  const { data, isLoading } = useMoreInfo(+id!);
  const listData: Array<keyof Omit<ICharacter, "origin" | "location">> = [
    "name",
    "gender",
    "status",
    "species",
  ];

  if (isLoading) {
    return (
      <div>
        <PortalIcon></PortalIcon>
      </div>
    );
  }

  const { image, location, origin } = data!;

  const episodes = data?.episode.map((link) => {
    const splited = link.split("/");
    return { number: splited[splited.length - 1], link };
  });

  return (
    <div className="w-screen h-screen flex  bg-gradient-to-tr from-30% via-65% from-green-500  via-teal-500 to-indigo-500">
      <div className="h-full w-full flex items-center justify-center text-white font-mono">
        <div className="p-4 window w-4/5 h-4/5 flex gap-4">
          <div className="flex flex-col gap-4 window-black p-4 h-full">
            <img src={image} className="rounded-md shadow-md" />
            <h4>You can see it on chapters:</h4>
            <ul className="flex flex-col overflow-y-auto overflow-x-hidden  h-full items-center gap-2 scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-primary-300 px-2">
              {episodes?.map(({ link, number }) => (
                <a
                  key={link}
                  href={link}
                  className="w-full p-2 window hover:bg-primary-800 transition-colors duration-300 ease-in-out"
                >
                  Chapter: {number}
                </a>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-full window-black p-4 text-2xl">
            <title className="inline-block  font-bold tracking-tight  text-4xl w-full border-b-2 border-primary-300">
              {data?.name}
            </title>
            {listData.map((key) => (
              <h3
                className="w-full text-ellipsis h-fit text-nowrap overflow-hidden text-primary-300"
                key={key}
              >
                {key.toUpperCase()}: {data![key]}
              </h3>
            ))}
          </div>
        </div>
      </div>
      <SideBar></SideBar>
    </div>
  );
};

export default MoreInfo;
