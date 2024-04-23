import { ReactNode } from "react";

interface IFilterData {
  title: string;
  onChange: (value: string) => void;
  loading?: boolean;
}
interface IFilterProps {
  className?: string;
  children?: ReactNode;
  data: IFilterData[];
}

export type { IFilterData, IFilterProps };
