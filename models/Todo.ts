export interface Todo {
  task: string
  complete: boolean
}

export interface TodoID extends Todo {
  id: number
}
