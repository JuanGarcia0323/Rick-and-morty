import SideBar from "@components/Header/SideBar";
import CharactersDisplay from "@modules/CharactersDisplay/CharactersDisplay";
const Home = () => {
  return (
    <div className="flex gap-2 w-screen h-screen  bg-gradient-to-tr from-30% via-65% from-green-500  via-teal-500 to-indigo-500">
      <CharactersDisplay />
      <SideBar />
    </div>
  );
};

export default Home;
