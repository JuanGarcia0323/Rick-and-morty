import GridElements from "@components/GridElements/GridElements";
import CharacterCard from "@components/CharacterCard/CharacterCard";
import Logic from "./Logic";
import Header from "@components/Header/Header";

const CharactersDisplay = () => {
  const { characters, isLoading, handleScroll } = Logic();
  characters;
  return (
    <GridElements
      loading={isLoading}
      className="md:p-8 overflow-y-scroll max-h-full md:mt-16"
      handleScroll={handleScroll}
    >
      <Header></Header>
      {characters?.map((character, i) => (
        <CharacterCard
          index={i}
          data={character}
          key={character.id}
          className=""
        />
      ))}
    </GridElements>
  );
};

export default CharactersDisplay;
