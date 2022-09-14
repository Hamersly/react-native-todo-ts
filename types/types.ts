export interface Todos {
  todoList: Todo[]
  sortedList: Todo[]
  flag: string
}

export interface Todo {
  id: number
  date: string
  text: string
  isCompleted: boolean
  change: boolean
}

export interface ChangeTask {
  id: number
  value: string
  text?: string
}

export interface RootState {
  todos: Todos
}
