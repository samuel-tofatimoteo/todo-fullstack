import request from 'superagent'
import { TodoId, Todos } from '../../models/todos'

const rootUrl = '/api/v1/todos'

// GET allTODOS
export async function getTodos(): Promise<TodoId> {
  const res = await request.get(rootUrl)
  return res.body
}
//POST Add a Todo
export async function addTodos(newTodo: Todos) {
  const res = await request
    .post(rootUrl)
    .send({ todo: newTodo.todo, priority: newTodo.priority })
  return res.body
}

//delete a todo
export async function deleteTodos(id: TodoId) {
  await request.delete(`/api/v1/todos/${id}`)
  return alert('your todo has been deleted')
}
