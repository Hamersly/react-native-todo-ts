import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../types/types";

const todoState = (state: RootState) => state;

export const flagSelector = createSelector(
  todoState,
  (state) => state.todos.flag
)

export const sortedListSelector = createSelector(
  todoState,
  (state) => state.todos.sortedList
);
