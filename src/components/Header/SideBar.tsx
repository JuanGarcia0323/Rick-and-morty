import { ISideBarProps } from "@interfaces";
import RickMortyIcon from "@components/RickMortyIcon/RickMortyIcon";

const SideBar = ({ className }: ISideBarProps) => {
  return (
    <header
      className={`h-full relative flex items-start py-8 justify-center w-[6%] window rounded-none ${className}`}
    >
      <RickMortyIcon />
    </header>
  );
};

export default SideBar;
