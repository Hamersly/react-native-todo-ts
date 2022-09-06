import { configureStore } from '@reduxjs/toolkit';
import todoSlice from "./todoLayer/slice";

export const store = configureStore({
  reducer: {todos: todoSlice},
});

