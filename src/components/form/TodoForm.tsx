import useInput from "@/hooks/useInput.ts";
import { useAppDispatch } from "@/store/store.ts";
import Button from "@/components/button/Button.tsx";
import TodoInput from "@/components/input/TodoInput.tsx";
import { BUTTON_TITLE, BUTTON_TYPES, Todo } from "@/types/todoTypes.ts";
import { addTodo } from "@/store/slice/todoSlice.ts";

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
    <div>
      <form onSubmit={handleOnSubmit}>
        <TodoInput
          inputValue={todoValue}
          handleOnChange={handleTodoOnChange}
          forwardRef={todoInputRef}
        />
        <Button buttonType={BUTTON_TYPES.SUBMIT} title={BUTTON_TITLE.ADD} />
      </form>
    </div>
  );
}
