import request from 'superagent'

const rootURL = '/api/v1/books/'

export async function getAllBooks() {
  const res = await request.get(rootURL)
  return res.body
}
