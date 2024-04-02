export interface Book {
  title: string
  author: string
  status: string
}

export interface BookWithId extends Book {
  id: number
}
