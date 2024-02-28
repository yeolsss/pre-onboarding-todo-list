import {
  BUTTON_COLOR,
  BUTTON_TITLE,
  BUTTON_TYPES,
  Todo,
} from "@/types/todoTypes.ts";
import Button from "@/components/button/Button.tsx";
import styled from "styled-components";
import useDelete from "@/hooks/useDelete.ts";

interface Props {
  todo: Todo;
}
export default function TodoCard({ todo }: Props) {
  const handleDelete = useDelete();
  return (
    <StTodoCard key={todo.id}>
      <p>{todo.todo}</p>
      <Button
        buttonType={BUTTON_TYPES.BUTTON}
        handleOnClick={handleDelete}
        todoId={todo.id}
        buttonColor={BUTTON_COLOR.DELETE}
        buttonHoverColor={BUTTON_COLOR.DELETE_HOVER}
      >
        {BUTTON_TITLE.DELETE}
      </Button>
    </StTodoCard>
  );
}

const StTodoCard = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  min-height: 10rem;
  min-width: 24rem;
  border: 1px solid var(--gray);
  border-radius: var(--border-radius);
  > p {
    flex: 1;
    padding: 0.5rem 1rem;
    word-break: break-word;
    line-height: 1.3;
  }

  > button {
    padding: 0.5rem 0;
  }
`;
