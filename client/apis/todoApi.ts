import request from 'superagent'
import { Todos, TodosId } from '../../models/Todos'

const rootUrl = '/api/v1/todos/'

export async function getTodos(): Promise<TodosId[]> {
  const res = await request.get(rootUrl)
  return res.body as TodosId[]
}

export async function deleteTodo(id: number) {
  await request.delete(rootUrl + id)
  return alert('your todo has been deleted')
}

export async function addTodo(newTodo: Todos) {
  await request.post(rootUrl).send(newTodo)
}

export async function updateTodo(id: number, update: string) {
  return await request.patch(rootUrl + id).send({ update: update })
}
