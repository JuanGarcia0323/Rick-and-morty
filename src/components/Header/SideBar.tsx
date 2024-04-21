import { ISideBarProps } from "@interfaces";
import RickMortyIcon from "@components/RickMortyIcon/RickMortyIcon";
import { Link } from "react-router-dom";

const SideBar = ({ className }: ISideBarProps) => {
  return (
    <header
      className={`h-full flex items-start py-9 justify-center w-[5%] window rounded-none ${className}`}
    >
      <Link to={"/"}>
        <RickMortyIcon className="hover:fill-primary-300 duration-300 ease-in-out transition-colors" />
      </Link>
    </header>
  );
};

export default SideBar;
