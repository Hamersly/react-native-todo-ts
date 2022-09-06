import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from "@reduxjs/toolkit";
import {ChangeTask, Todo, Todos} from "../../types/types";
import {todoFilter} from "../../helpers/helpers";

const initialState = {
  todoList: [],
  sortedList: [],
  flag: 'FILTER_ALL'
} as Todos

const todoSlice = createSlice({
  name: 'todoState',
  initialState,
  reducers: {

    addTask(state, action: PayloadAction<Todo>) {
      state.todoList = [...state.todoList, action.payload]
      state.sortedList = todoFilter(state.flag, state.todoList)
    },

    filterAll(state) {
      state.flag = 'FILTER_ALL'
      state.sortedList = state.todoList
    },

    filterIsCompleted(state) {
      state.flag = 'FILTER_IS_COMPLETED'
      state.sortedList = state.todoList.filter((task) => task.isCompleted)
    },

    filterIsNotCompleted(state) {
      state.flag = 'FILTER_IS_NOT_COMPLETED'
      state.sortedList = state.todoList.filter((task) => !task.isCompleted)
    },

    removeAllTasks(state) {
      state.todoList = []
      state.sortedList = []
    },

    removeTask(state, action: PayloadAction<number>) {
      state.todoList = state.todoList.filter((task) => task.id !== action.payload)
      state.sortedList = todoFilter(state.flag, state.todoList)
    },

    changeTask(state,  action: PayloadAction<ChangeTask>) {
      const changeTaskValue = state.todoList.map((task) => {
          if (task.id === action.payload.id && action.payload.text) {
            // @ts-ignore
            return {...task, [action.payload.value]: !task[action.payload.value], text: action.payload.text}
          } else if (task.id === action.payload.id) {
            // @ts-ignore
            return {...task, [action.payload.value]: !task[action.payload.value]}
          } else {
            return {...task}
          }
        }
      )
      return {
        ...state,
        todoList: changeTaskValue,
        sortedList:todoFilter(state.flag, changeTaskValue)
      }
    }

  }
})

export const {
  addTask,
  filterAll,
  filterIsCompleted,
  filterIsNotCompleted,
  removeAllTasks,
  removeTask,
  changeTask
} = todoSlice.actions

export default todoSlice.reducer