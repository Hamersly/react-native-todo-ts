import {Todo, Todos} from "../types/types";
import {AsyncStorage} from "react-native";

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

// export const setData = async (key: string, value: Todos) => {
//   try {
//     await AsyncStorage.setItem(key, value)
//   } catch (e) {
//     // saving error
//   }
// }
//
// export const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@storage_Key')
//     if(value !== null) {
//       // value previously stored
//     }
//   } catch(e) {
//     // error reading value
//   }