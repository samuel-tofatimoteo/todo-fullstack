export interface Todos {
  details: string
  priority: number
  done: boolean
}

export interface TodosData extends Todos {
  id: number
}
