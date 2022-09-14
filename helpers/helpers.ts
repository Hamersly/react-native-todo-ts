import {Todo, Todos} from "../types/types";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fullTodoFunc = (text: string): Todo => {
  const nowDate = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();

  return {
    id: new Date().getTime(),
    date: nowDate + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
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

export const setEntries = async (todos: Todos):Promise<void> => {
  try {
    await AsyncStorage.setItem("todos", JSON.stringify(todos));
  } catch (err) {
    console.log(err)
  }
};
