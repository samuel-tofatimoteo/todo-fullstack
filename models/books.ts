export interface Book {
  title: string
  author: string
  isRead: boolean
}

export interface BookWithId extends Book {
  id: number
}
