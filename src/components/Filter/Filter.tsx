import Input from "@components/Input/Input";
import { IFilterProps } from "@interfaces";

const Filter = ({ children, className, data }: IFilterProps) => {
  return (
    <>
      {data.map(({ onChange, title, loading }) => (
        <Input
          onChange={onChange}
          placeholder={title}
          loading={loading}
          className={className}
        />
      ))}
      {children}
    </>
  );
};

export default Filter;
