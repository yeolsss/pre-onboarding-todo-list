import Button from "@/components/button/Button.tsx";
import TodoInput from "@/components/input/TodoInput.tsx";
import { BUTTON_COLOR, BUTTON_TITLE, BUTTON_TYPES } from "@/types/todoTypes.ts";
import styled from "styled-components";
import useForm from "@/hooks/useForm.ts";

export default function TodoForm() {
  const { handleOnSubmit, todoValue, handleTodoOnChange, todoInputRef } =
    useForm();
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
