import request from 'superagent'
import { NewTodo } from '../../models/models'

const rootUrl = 'api/v1/todos'

// Get all todos
export async function getTodos() {
  const res = await request.get(`${rootUrl}`)
  return res.body
}

// Add a todo
export async function addTodo(newTodo: NewTodo) {
  return await request.post(`${rootUrl}`).send(newTodo)
}