import { ReactNode, WheelEvent } from "react";
interface IGridElementsProps {
  children: ReactNode;
  loading?: boolean;
  className?: string;
  handleScroll: (e: WheelEvent<HTMLDivElement>) => void;
}

export type { IGridElementsProps };
