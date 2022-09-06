import {Todo} from "../types/types";

export const fullTodoFunc = (text: string): Todo => {
  return {
    id: new Date().getTime(),
    date: new Date().toLocaleString("ru"),
    text,
    isCompleted: false,
    change: false,
  }
}

export const todoFilter = (flag: string, arr: any) => {
  switch (flag) {
    case "FILTER_ALL":
      return  arr
    case "FILTER_IS_COMPLETED":
      return arr.filter((task:any) => task.isCompleted)
    case "FILTER_IS_NOT_COMPLETED":
      return arr.filter((task:any) => !task.isCompleted)
    default:
      return arr
  }
}