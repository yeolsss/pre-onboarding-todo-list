import { useSelector } from "react-redux";
import { deleteTodo, selectorTodoList } from "@/store/slice/todoSlice.ts";
import Button from "@/components/button/Button.tsx";
import { BUTTON_TITLE, BUTTON_TYPES } from "@/types/todoTypes.ts";
import { useAppDispatch } from "@/store/store.ts";

export default function TodoList() {
  const { todoList } = useSelector(selectorTodoList);
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    confirm("삭제하시겠습니까?") && dispatch(deleteTodo(id));
  };

  return (
    <div>
      {todoList.map((todo) => (
        <li key={todo.id}>
          <span>{todo.todo}</span>
          <Button
            buttonType={BUTTON_TYPES.BUTTON}
            title={BUTTON_TITLE.DELETE}
            handleOnClick={handleDelete}
            todoId={todo.id}
          />
        </li>
      ))}
    </div>
  );
}
