export interface Todo extends TodoUpdate {
  id: number
}

export interface TodoUpdate {
  name: string
  details: string
  completed: boolean
}
