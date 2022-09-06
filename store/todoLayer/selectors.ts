import {createSelector} from "@reduxjs/toolkit";
import {Todos} from "../../types/types";

const todoState = (state: any) => state;

export const flagSelector = createSelector(
  todoState,
  (state) => state.todos.flag
)

export const sortedListSelector = createSelector(
  todoState,
  (state) => state.todos.sortedList
);
