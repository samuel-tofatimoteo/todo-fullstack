export interface Todos {
  task: string
  priority: string
  completed: boolean
}

export interface TodosId extends Todos {
  id: number
}
