export interface Todos {
  task: string
  importance: string
  completed: boolean
}

export interface TodosId extends Todos {
  id: number
}
