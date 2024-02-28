import { useSelector } from "react-redux";
import { selectorTodoList } from "@/store/slice/todoSlice.ts";
import TodoCard from "@/components/todoCard/TodoCard.tsx";
import styled from "styled-components";

export default function TodoList() {
  const { todoList } = useSelector(selectorTodoList);

  return (
    <StTodoListWrapper>
      {todoList.map((todo) => (
        <TodoCard todo={todo} />
      ))}
    </StTodoListWrapper>
  );
}

const StTodoListWrapper = styled.ul`
  max-width: 50rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
