import request from 'superagent'
import { Todo } from '../../models/todo'
import { up } from '../../server/db/migrations/20240325215048_todos'

const rootUrl = '/api/v1/todos'

export async function fetchTodos(): Promise<Todo[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function addTodo(newTodo: Todo): Promise<void> {
  await request.post(rootUrl).send(newTodo)
}

export async function deleteTodo(id: string) {
  await request.delete(`${rootUrl}/${id}`)
}

export async function updateTodo(updatedTodo: Todo): Promise<void> {
  await request.put(`${rootUrl}/${updatedTodo.id}`).send(updatedTodo)
}
