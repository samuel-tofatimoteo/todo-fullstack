export interface Todos {
  todo?: string
  completed?: boolean
  priority?: string
}

export interface TodoId extends Todos {
  id: number
}
