import { ISideBarProps } from "@interfaces";
import RickMortyIcon from "@components/RickMortyIcon/RickMortyIcon";
import { Link } from "react-router-dom";

const Header = ({ className }: ISideBarProps) => {
  return (
    <header
      className={`sticky md:absolute left-0 top-0 z-50 backdrop-blur-md flex items-start p-4 justify-end h-fit w-full window rounded-none ${className}`}
    >
      <Link to={"/"}>
        <RickMortyIcon className="hover:fill-primary-300 duration-300 ease-in-out transition-colors" />
      </Link>
    </header>
  );
};

export default Header;
