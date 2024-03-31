import request from 'superagent'
import { Mark, Task, TaskId } from '../../models/todo'

const rootUrl = '/api/v1'

export async function getTodos() {
  return request.get(rootUrl + '/todos').then((res) => {
    return res.body
  })
}
export async function addTodos(todo: Task) {
  return request.post(rootUrl + '/todos/add').send(todo)
}

export async function delTodos(id: number) {
  return request.delete(rootUrl + `/todos/${id}`)
}

export async function updateTodos(data: TaskId) {
  return request
    .patch(rootUrl + `/todos/update/${data.id}`)
    .send({ task: data.task })
}

export async function markTodos(data: Mark) {
  return request
    .patch(rootUrl + `/todos/${data.id}`)
    .send({ completed: data.completed })
}
