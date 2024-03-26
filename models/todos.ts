export interface Todos {
  what: string
  when: string
  // done: boolean
}

export interface TodoData extends Todos {
  done: boolean
}
export interface TodosData extends TodoData {
  id: number
}
