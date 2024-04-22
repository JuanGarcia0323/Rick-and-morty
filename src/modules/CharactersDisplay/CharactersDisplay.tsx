import GridElements from "@components/GridElements/GridElements";
import CharacterCard from "@components/CharacterCard/CharacterCard";
import Logic from "./Logic";
import Header from "@components/Header/Header";

const CharactersDisplay = () => {
  const { pages, isLoading, ref } = Logic();

  return (
    <div className="w-screen h-screen overflow-auto">
      <Header></Header>
      {pages?.map(({ results }, i) => (
        <GridElements
          key={i}
          loading={isLoading}
          className="md:p-8 overflow-y-scroll max-h-full md:mt-16"
        >
          {results?.map((character, i) => (
            <CharacterCard
              index={i}
              data={character}
              key={character.id}
              className=""
            />
          ))}
        </GridElements>
      ))}
      <div className="p-5 border-2" ref={ref}></div>
    </div>
  );
};

export default CharactersDisplay;
