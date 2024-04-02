export interface Task extends TaskUpdate {
  id: number
}

export interface TaskUpdate {
  name: string
  details: string
  difficulty: string
  completed: boolean
}
