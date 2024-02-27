interface Props {
  inputValue: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  forwardRef?: React.RefObject<HTMLInputElement>;
}
export default function TodoInput({
  inputValue,
  handleOnChange,
  forwardRef,
}: Props) {
  return (
    <input value={inputValue} onChange={handleOnChange} ref={forwardRef} />
  );
}
