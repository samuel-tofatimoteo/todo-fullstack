import { ReactNode } from 'react'

export interface toDo {
  [x: string]: ReactNode
  taskDetails: string
  priority: number
  completed: boolean
  newTodo: string
  
}
