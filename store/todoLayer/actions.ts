import {createAction} from "@reduxjs/toolkit";

export const addTask = createAction("addTask", (text: string): any => {
  console.log('action addTask')
  return {
    payload: {
      id: new Date().getTime(),
      date: new Date().toLocaleString(),
      text,
      isCompleted: false,
      change: false,
    }
  }
});
