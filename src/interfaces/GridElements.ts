import { ReactNode } from "react";
interface IGridElementsProps {
  children: ReactNode;
  loading?: boolean;
  className?: string;
  handleScrollDown: () => void;
  handleScrollUp: () => void;
}

export type { IGridElementsProps };
