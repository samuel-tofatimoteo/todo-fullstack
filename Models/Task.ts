export interface Task {
  name: string
  details: string
  priority: number
  completed: boolean
}
export interface TaskDB extends Task {
  id: number
}
