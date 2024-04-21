import { IGridElementsProps } from "@interfaces";

const GridElements = ({ children, className, loading }: IGridElementsProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full lg:h-full lg:max-h-full ${
        loading ? "animate-pulse window" : ""
      } transition-color duration-300 ease-in-out gap-4 ${className}`}
    >
      {loading ? "loading..." : children}
    </div>
  );
};

export default GridElements;
