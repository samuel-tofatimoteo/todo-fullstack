import { ReactNode } from 'react'

export interface todo {
  [x: string]: ReactNode
  taskDetails: string
  priority: number
  completed: boolean
  newTodo: string
}
