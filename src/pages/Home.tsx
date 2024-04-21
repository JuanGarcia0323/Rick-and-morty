import { useParams } from "react-router-dom";
import { useCharacters } from "@queries";
import CharacterCard from "@components/CharacterCard/CharacterCard";
import SideBar from "@components/Header/SideBar";
import GridElements from "@components/GridElements/GridElements";
const Home = () => {
  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    isLoading,
    isError,
  } = useCharacters();

  const characters = data?.pages[0]?.results!;

  return (
    <div className="flex gap-2 w-screen h-screen  bg-gradient-to-tr from-30% via-65% from-green-500  via-teal-500 to-indigo-500">
      <GridElements loading={isLoading} className="p-8">
        {characters?.map((character) => (
          <CharacterCard data={character} key={character.id} />
        ))}
      </GridElements>
      <SideBar />
    </div>
  );
};

export default Home;

{
  /* <div className="w-2/4 h-2/4  flex items-center justify-around  window text-white">
          <button
            onClick={() => fetchPreviousPage()}
            className="border py-2 px-8 rounded-md shadow-md font-extrabold tracking-tight uppercase cursor-pointer"
          >
            Prev
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              fetchNextPage();
            }}
            className={`border py-2 px-8 rounded-md shadow-md font-extrabold tracking-tight uppercase cursor-pointer ${
              hasNextPage ? "" : "hidden"
            }`}
          >
            Next
          </button>
        </div> */
}
