import { IGridElementsProps } from "@interfaces";

const GridElements = ({
  children,
  className,
  loading,
  handleScroll,
}: IGridElementsProps) => {
  return (
    <div
      onWheel={handleScroll}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full overflow-auto auto-rows-max lg:auto-rows-auto lg:h-full  lg:max-h-full ${
        loading ? "animate-pulse window" : ""
      } transition-color duration-300 ease-in-out gap-4 scrollbar-default ${className}`}
    >
      {loading ? "loading..." : children}
    </div>
  );
};

export default GridElements;
