import request from 'superagent'
import { Todo, TodoID } from '../../models/Todo'

const rootUrl = '/api/v1/'

export async function getTodos(): Promise<TodoID[]> {
  const res = await request.get(rootUrl + 'todos')
  return res.body as TodoID[]
}

export async function addTodo(newTodo: Todo) {
  await request.post(rootUrl + 'todos').send(newTodo)
}

export async function getIncomplete(): Promise<TodoID[]> {
  const res = await request.get(rootUrl + 'todos/done')
  return res.body as TodoID[]
}

export async function getComplete(): Promise<TodoID[]> {
  const res = await request.get(rootUrl + 'todos/not-done')
  return res.body as TodoID[]
}

export async function deleteTodo(id: number) {
  return await request.delete(rootUrl + `todo/${id}`)
}

export async function updateToDoneTodo(id: number) {
  return await request.patch(`${rootUrl}todo/${id}`).send({ id })
}
