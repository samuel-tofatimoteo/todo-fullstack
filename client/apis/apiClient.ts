import request from 'superagent'
import { TodoId, Todos } from '../../models/todos'
const rootUrl = '/api/v1/todos/'

export async function getTodos(): Promise<TodoId[]> {
  const res = await request.get(rootUrl)
  console.log(res.body)

  return res.body as TodoId[]
}

export async function getTodoById(id: number) {
  const res = await request.get(`${rootUrl}${id}`)
  return res.body
}

export async function addNewTodo(newTodo: Todos) {
  console.log(newTodo)
  const res = await request.post(rootUrl).send(newTodo)
  return res.body
}

export async function updateTodos(
  id: number,
  updatedTodo: { todo: string; completed: boolean },
) {
  console.log(`${rootUrl}${id}`)
  console.log(updatedTodo)

  const res = await request.put(`${rootUrl}${id}`).send(updatedTodo)
  return res.body
}

export async function deleteTodo(id: number) {
  await request.delete(`${rootUrl}${id}`)
}

export async function getActiveTodos() {
  const res = await request.get(`${rootUrl}active`)
  return res.body
}

export async function deleteCompletedTodos() {
  await request.delete(`${rootUrl}completed`)
}