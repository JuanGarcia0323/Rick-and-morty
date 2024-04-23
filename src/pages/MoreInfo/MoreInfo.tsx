import SidebarMoreInfo from "@components/SidebarMoreInfo/SideBarMoreInfo";
import Header from "@components/Header/Header";
import CardCarrousel from "@components/CardCarrousel/CardCarrousel";
import Characteristics from "@components/Characteristics/Characteristics";
import Logic from "./Logic";

const MoreInfo = () => {
  const {
    episodes,
    listData,
    locationResidents,
    originResidents,
    data,
    loadingEpisodes,
    locationResidentsLoading,
    originResidentsLoading,
    location,
    origin,
  } = Logic();

  return (
    <div className="w-screen h-screen flex flex-col md:items-center justify-center">
      <Header></Header>
      <div className="max-h-full text-white font-mono overflow-hidden p-4 window flex flex-col w-full h-full md:flex-row md:w-4/5 md:h-4/5 gap-4">
        <SidebarMoreInfo
          episodes={episodes}
          image={data?.image}
          loading={loadingEpisodes}
          alt={data?.name}
        />
        <div className="flex flex-col gap-2 md:gap-4 w-full overflow-y-auto window-black h-full p-4 md:text-2xl ">
          <Characteristics characteristics={listData} data={data} />
          <CardCarrousel
            className="h-full"
            title={`Origin: ${origin.data?.name}`}
            data={originResidents}
            loading={originResidentsLoading}
          />
          {location.data?.name === origin.data?.name || (
            <CardCarrousel
              className="h-full"
              title={`Location: ${location.data?.name}`}
              data={locationResidents}
              loading={locationResidentsLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
