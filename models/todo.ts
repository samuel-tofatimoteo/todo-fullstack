export interface TodosData {
  task: string
  priority: number
  completed: boolean
}
export interface Todos extends TodosData {
  id: number
}
