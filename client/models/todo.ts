export interface Task {
  task: string
  completed: boolean
}

export interface TaskId extends Task {
  id: number
}

export interface Finshed {
  id: number
}
