
export interface Todos {
  todo: string, 
  importance: string,
  complete: boolean
}

export interface TodoId extends Todos{ 
  id: number 
}