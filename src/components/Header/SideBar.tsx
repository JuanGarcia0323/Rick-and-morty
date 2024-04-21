import { ISideBarProps } from "@interfaces";
import RickMortyIcon from "@components/RickMortyIcon/RickMortyIcon";

const SideBar = ({ className }: ISideBarProps) => {
  return (
    <header
      className={`h-full relative flex items-start py-9 justify-center w-[5%] window rounded-none ${className}`}
    >
      <RickMortyIcon />
    </header>
  );
};

export default SideBar;
