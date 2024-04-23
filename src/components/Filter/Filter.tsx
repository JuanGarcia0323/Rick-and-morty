import Input from "@components/Input/Input";
import { IFilterProps } from "@interfaces";

const Filter = ({ children, data }: IFilterProps) => {
  return (
    <>
      {data.map(({ onChange, title, loading, className }) => (
        <Input
          key={title}
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
