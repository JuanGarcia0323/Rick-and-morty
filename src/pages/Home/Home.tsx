import CharactersDisplay from "@modules/CharactersDisplay/CharactersDisplay";
import Header from "@components/Header/Header";
const Home = () => {
  return (
    <div className="flex flex-col gap-2 w-screen h-screen overflow-auto">
      <CharactersDisplay />
    </div>
  );
};

export default Home;
