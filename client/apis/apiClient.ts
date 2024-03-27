import request from 'superagent'
import { Todo } from '../../models/todo'

const rootUrl = '/api/v1/todos'

export async function fetchTodos(token: string): Promise<Todo[]> {
  const res = await request.get(rootUrl).set('Authorization', `Bearer ${token}`)
  return res.body
}

export async function addTodo(newTodo: Todo, token: string): Promise<void> {
  await request
    .post(rootUrl)
    .send(newTodo)
    .set('Authorization', `Bearer ${token}`)
}

export async function deleteTodo(id: string, token: string): Promise<void> {
  await request
    .delete(`${rootUrl}/${id}`)
    .set('Authorization', `Bearer ${token}`)
}

export async function updateTodo(
  updatedTodo: Todo,
  token: string,
): Promise<void> {
  await request
    .put(`${rootUrl}/${updatedTodo.id}`)
    .send(updatedTodo)
    .set('Authorization', `Bearer ${token}`)
}
