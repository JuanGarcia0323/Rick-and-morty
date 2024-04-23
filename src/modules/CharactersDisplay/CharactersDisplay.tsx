import GridElements from "@components/GridElements/GridElements";
import CharacterCard from "@components/CharacterCard/CharacterCard";
import Logic from "./Logic";
import Header from "@components/Header/Header";

const CharactersDisplay = () => {
  const { characters, isLoading, ref, handleChangeName } = Logic();

  return (
    <div className="w-screen h-screen overflow-auto">
      <Header setName={handleChangeName}></Header>
      <GridElements loading={isLoading} className="md:p-8 md:mt-16">
        {characters?.map((character, i) => (
          <CharacterCard index={i} data={character} key={character.id} />
        ))}
      </GridElements>
      <div className="p-5" ref={ref}></div>
    </div>
  );
};

export default CharactersDisplay;
