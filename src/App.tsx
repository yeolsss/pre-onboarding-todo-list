import Header from "@/components/header/Header.tsx";
import TodoForm from "@/components/form/TodoForm.tsx";
import TodoList from "@/components/List/TodoList.tsx";
import styled from "styled-components";

export default function App() {
  return (
    <StWrapper>
      <section>
        <Header />
      </section>
      <section>
        <TodoForm />
      </section>
      <section>
        <TodoList />
      </section>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 144rem;
  > section {
    margin: 3rem auto 0;
  }
`;
