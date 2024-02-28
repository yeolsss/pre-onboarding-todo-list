import { useAppDispatch } from "@/store/store.ts";
import { deleteTodo } from "@/store/slice/todoSlice.ts";

export default function useDelete() {
  const dispatch = useAppDispatch();
  return (id: number) => {
    confirm("삭제하시겠습니까?") && dispatch(deleteTodo(id));
  };
}
