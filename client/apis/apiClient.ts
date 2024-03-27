import request from 'superagent'
import { todo } from '../../models/todo'
import { up } from '../../server/db/migrations/20240325210343_todo'

const rootUrl = '/api/v1/todo'

export async function fetchTodos(): Promise<toDo[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function addTodo(newTodo: toDo): Promise<void> {
  await request.post(rootUrl).send(newTodo)
}

export async function deleteTodo(id: string) {
  await request.delete(`${rootUrl}/${id}`)
}

export async function updateTodo(updatedTodo: toDo): Promise<void> {
  await request.put(`${rootUrl}/${updatedTodo.id}`).send(updatedTodo)
}
