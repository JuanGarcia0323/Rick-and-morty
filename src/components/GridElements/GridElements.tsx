import { IGridElementsProps } from "@interfaces";
import LoadingPanel from "@components/LoadingPanel/LoadingPanel";

const GridElements = ({ children, className, loading }: IGridElementsProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full overflow-auto auto-rows-max lg:auto-rows-auto ${
        loading ? "h-full lg:flex" : ""
      } transition-color duration-300 ease-in-out gap-4 scrollbar-default ${className}`}
    >
      {loading ? <LoadingPanel></LoadingPanel> : children}
    </div>
  );
};

export default GridElements;
