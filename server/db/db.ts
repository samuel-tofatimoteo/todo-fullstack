import connection from './connection'
import { book } from '../../models/books'

const db = connection

export function getBooks(): Promise<book[]> {
  return db('books').select()
}

export function getBookById(id: number): Promise<book> {
  return db('books').where({ id }).select().first()
}

export function addBooks(bookObj: book) {
  return db('books').insert(bookObj)
}

export function delBooksByTitle(title: string) {
  return db('books').del().where({ title })
}
