import { useAppDispatch } from "@/store/store.ts";
import { Todo } from "@/types/todoTypes.ts";
import { addTodo } from "@/store/slice/todoSlice.ts";
import useInput from "@/hooks/useInput.ts";

interface ReturnType {
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  todoValue: string;
  handleTodoOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  todoInputRef: React.RefObject<HTMLInputElement>;
}
export default function useForm(): ReturnType {
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

  return {
    handleOnSubmit,
    todoValue,
    handleTodoOnChange,
    todoInputRef,
  };
}
