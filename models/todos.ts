export interface Todos {
  what: string
  when: string
  done: boolean
}

export interface TodosData extends Todos {
  id: number
}
