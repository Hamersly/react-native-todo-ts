import type {PayloadAction} from '@reduxjs/toolkit'
import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {ChangeTask, Todo, Todos} from "../../types/types";
import {todoFilter} from "../../helpers/helpers";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  todoList: [],
  sortedList: [],
  flag: 'FILTER_ALL'
} as Todos

export const addState: any = createAsyncThunk(
  'todoState/addState',
  async () => {
    const jsonValue: any = await AsyncStorage.getItem('todos')
    return jsonValue != null ? JSON.parse(jsonValue) : null

  }
)

const todosAdapter = createEntityAdapter();

const todoSlice = createSlice({
  name: 'todoState',
  initialState: todosAdapter.getInitialState(initialState),
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
      state.sortedList = state.todoList.filter((task: Todo) => task.isCompleted)
    },

    filterIsNotCompleted(state) {
      state.flag = 'FILTER_IS_NOT_COMPLETED'
      state.sortedList = state.todoList.filter((task: Todo) => !task.isCompleted)
    },

    removeAllTasks(state) {
      state.todoList = []
      state.sortedList = []
    },

    removeTask(state, action: PayloadAction<number>) {
      state.todoList = state.todoList.filter((task: Todo) => task.id !== action.payload)
      state.sortedList = todoFilter(state.flag, state.todoList)
    },

    changeTask(state, action: PayloadAction<ChangeTask>) {
      const changeTaskValue = state.todoList.map((task: Todo) => {
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
        sortedList: todoFilter(state.flag, changeTaskValue)
      }
    },
  },

  extraReducers: {
    [addState.fulfilled]: (state, action: PayloadAction<Todos>) => {
      state.todoList = action.payload.todoList
      state.sortedList = action.payload.sortedList
      state.flag = action.payload.flag
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