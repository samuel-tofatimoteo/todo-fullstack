import request from 'superagent'
import { TodoId, Todos } from '../../models/todos'

const rootUrl = '/api/v1/todos'

export async function getTodos(): Promise<TodoId[]> {
  const res = await request.get(rootUrl)
  // console.log(res.body)

  return res.body
}

export async function deleteTodos(id: number) {
  await request.delete(`/api/v1/todos/${id}`)
  // console.log(res.body)

  return alert('your todo has been deleted')
}

export async function addTodo(newTodo: Todos) {
  const res = await request
    .post(rootUrl)
    .send({ todo: newTodo.todo, priority: newTodo.priority })
  return res.body
}
