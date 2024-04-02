export interface Todos {
  id: number
  task: string
  priority: string
  completed: boolean
}

export interface Task {
  id: number
  task: string
  priority: string
  completed: boolean
}

export interface TaskId extends Task {
  id: number
}

export interface Complete {
  id: number
  completed: boolean
}
