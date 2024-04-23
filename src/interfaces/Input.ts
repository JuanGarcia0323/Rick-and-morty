interface IInputProps {
  className?: string;
  value?: string;
  loading?: boolean;
  onChange: (value: string) => void;
  placeholder?: string;
}

export type { IInputProps };
