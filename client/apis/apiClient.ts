import request from 'superagent'
import { toDo } from '../../models/toDo'

const rootUrl = '/api/v1/todo'
export async function fetchTodo(): Promise<void> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function addTodo(newTask: toDo): Promise<void> {
  await request.post(rootUrl).send(newTask)
}