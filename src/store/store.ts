import { configureStore } from "@reduxjs/toolkit";
import todoList from "./slice/todoSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    todoList,
  },
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
