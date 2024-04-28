
export interface Todos {
  task: string, 
  importance: string,
  complete: boolean
}

export interface TodoId extends Todos{ 
  id: number 
}