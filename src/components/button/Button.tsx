import { BUTTON_TYPES } from "@/types/todoTypes.ts";

interface Props {
  buttonType: BUTTON_TYPES.SUBMIT | BUTTON_TYPES.RESET | BUTTON_TYPES.BUTTON;
  title: string;
  handleOnClick?: (id: number) => void;
  todoId?: number;
}

export default function Button({
  buttonType,
  title,
  handleOnClick,
  todoId,
}: Props) {
  const onClick = (todoId: number | undefined) => {
    if (handleOnClick) handleOnClick(todoId!);
  };
  return (
    <button type={buttonType} onClick={() => onClick(todoId)}>
      {title}
    </button>
  );
}
