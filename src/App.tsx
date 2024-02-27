import Header from "@/components/header/Header.tsx";
import TodoForm from "@/components/form/TodoForm.tsx";
import TodoList from "@/components/List/TodoList.tsx";

export default function App() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <TodoForm />
      </section>
      <section>
        <TodoList />
      </section>
    </div>
  );
}
