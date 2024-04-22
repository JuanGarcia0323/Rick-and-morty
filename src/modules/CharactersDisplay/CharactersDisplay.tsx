import GridElements from "@components/GridElements/GridElements";
import CharacterCard from "@components/CharacterCard/CharacterCard";
import Logic from "./Logic";

const CharactersDisplay = () => {
  const { characters, isLoading } = Logic();
  characters;
  return (
    <GridElements loading={isLoading} className="p-8">
      {characters?.map((character) => (
        <CharacterCard data={character} key={character.id} />
      ))}
    </GridElements>
  );
};

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

export default CharactersDisplay;
