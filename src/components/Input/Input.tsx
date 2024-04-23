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
      placeholder={placeholder}
      className={` p-2 window placeholder-white text-white ${className ?? ""}`}
      onChange={(e) => onChange(e.currentTarget.value)}
      value={value}
      disabled={loading}
    />
  );
};

export default Input;
