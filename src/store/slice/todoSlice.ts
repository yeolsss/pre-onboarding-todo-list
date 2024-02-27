import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "@/types/todoTypes.ts";
import { RootState } from "@/store/store.ts";

const initialState = {
  todoList: [] as Todo[],
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList.unshift(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const selectorTodoList = (state: RootState) => state.todoList;
export default todoSlice.reducer;
