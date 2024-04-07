import request from 'superagent'
import { Task, TaskId, Todos } from '../models/todo'

const rootUrl = '/api/v1'

export async function getTodos() {
  return request.get(rootUrl + '/todos').then((res) => {
    return res.body
  })
}

export async function addTodos(todo: Todos) {
  return request.post(rootUrl + '/todos').send(todo)
}

export async function delTodos(id: number) {
  return request.delete(rootUrl + `/todos/${id}`)
}

export async function updateTodos(data: TaskId) {
  return request.patch(rootUrl + `/todos/${data.id}`).send({ task: data.task })
}

export async function completeTodos(id: number) {
  return request.patch(rootUrl + `/todos/${id}`)
}
