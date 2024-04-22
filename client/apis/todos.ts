import request from 'superagent'
import { NewTodo, Todo, TodoUpdate } from '../../models/models'

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

// Update a todo
export async function updateTodo(todoUpdate: Todo) {
  const { id, name, details, due_date, completed } = todoUpdate
  const res = await request
    .patch(`${rootUrl}/update/${id}`)
    .send({ name, details, due_date, completed })
  return res.body
}