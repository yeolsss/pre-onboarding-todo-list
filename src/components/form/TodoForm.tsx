import useInput from "@/hooks/useInput.ts";
import { useAppDispatch } from "@/store/store.ts";
import Button from "@/components/button/Button.tsx";
import TodoInput from "@/components/input/TodoInput.tsx";
import {
  BUTTON_COLOR,
  BUTTON_TITLE,
  BUTTON_TYPES,
  Todo,
} from "@/types/todoTypes.ts";
import { addTodo } from "@/store/slice/todoSlice.ts";
import styled from "styled-components";

export default function TodoForm() {
  const [todoValue, setTodoValue, handleTodoOnChange, todoInputRef] =
    useInput();

  const dispatch = useAppDispatch();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todoValue.trim() === "") {
      alert("할 일을 입력하세요.");
      todoInputRef.current?.focus();
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      todo: todoValue,
    };

    dispatch(addTodo(newTodo));
    setTodoValue("");
  };

  return (
    <StForm onSubmit={handleOnSubmit}>
      <TodoInput
        inputValue={todoValue}
        handleOnChange={handleTodoOnChange}
        forwardRef={todoInputRef}
      />
      <Button
        buttonType={BUTTON_TYPES.SUBMIT}
        buttonColor={BUTTON_COLOR.ADD}
        buttonHoverColor={BUTTON_COLOR.ADD_HOVER}
      >
        {BUTTON_TITLE.ADD}
      </Button>
    </StForm>
  );
}

const StForm = styled.form`
  display: flex;
  gap: 0.5rem;
  > input {
    font-size: 2.4rem;
    outline: none;
    padding: 0.5rem 0.5rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--gray);
    transition: border-color 0.2s ease-in;

    &:focus {
      border-color: var(--blue);
    }
  }
  > button {
    font-size: 2.4rem;
  }
`;
