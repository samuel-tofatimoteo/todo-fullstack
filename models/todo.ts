export interface Todos {
  id: number
  task: string
  priority: string
  completed: boolean
}

export interface Task {
  task: string
}

export interface TaskId extends Task {
  id: number
}
