import request from 'superagent'
import { Todos } from '../../models/model'

const rootUrl = '/api/v1'

export async function getTodos() {
  return request.get(rootUrl + '/todos').then((res) => {
    return res.body
  })
}
export async function addTodos(todo: Todos) {
  return request.post(rootUrl + '/todos/add').send(todo)
}

export async function delTodos(id: number) {
  return request.delete(rootUrl + `/todos/${id}`)
}
