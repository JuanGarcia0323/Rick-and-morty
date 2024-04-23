import { ReactNode } from "react";

interface IFilterData {
  title: string;
  onChange: (value: string) => void;
  loading?: boolean;
  className?: string;
}
interface IFilterProps {
  children?: ReactNode;
  data: IFilterData[];
}

export type { IFilterData, IFilterProps };
