import request from 'superagent'
import { Todos } from '../../models/todos'
const rootUrl = '/api/v1/todos'

export async function fetchTodo(): Promise<void> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function addTodo(newTask: Todos): Promise<void> {
  await request.post(rootUrl).send(newTask)
}

export async function deleteTodo(id: number): Promise<void> {
  const url = `/api/v1/todos/${id}`
  await request.del(url)
}
