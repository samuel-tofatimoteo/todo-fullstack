export interface Todo extends TodoUpdate {
  id: number
}

export interface TodoUpdate {
  name: string
  details: string
  due_date: string
  completed: boolean
}

export interface NewTodo {
  name: string
}