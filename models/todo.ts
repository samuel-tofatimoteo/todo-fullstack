export interface TodoData {
  task_detail: string
  priority: number
  completed: boolean
}

export interface Todo extends TodoData {
  id: number
}
