import request from 'superagent'
import { Book } from '../../models/books'

const rootURL = '/api/v1/books/'

export async function getAllBooks() {
  const res = await request.get(rootURL)
  return res.body
}

export async function addBook(obj: Book) {
  await request.post(rootURL).send(obj)
}
