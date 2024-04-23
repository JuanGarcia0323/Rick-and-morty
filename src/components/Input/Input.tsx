import { IInputProps } from "@interfaces";

const Input = ({
  onChange,
  placeholder,
  className,
  value,
  loading,
}: IInputProps) => {
  return (
    <input
      data-testid="input"
      placeholder={placeholder}
      className={` p-2 window placeholder-white outline-none text-white focus:outline-indigo-500 hover:outline-primary-500 duration-300 ease-in-out transition-all ${
        className ?? ""
      }`}
      onChange={(e) => onChange(e.currentTarget.value)}
      value={value}
      disabled={loading}
    />
  );
};

export default Input;
