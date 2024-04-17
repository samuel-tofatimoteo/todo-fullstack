import request from 'superagent'
import { TodosId, Todos } from '../../models/Todos'

const rootUrl = '/api/v1/todos'

// GET allTodos
export async function getTodos(): Promise<TodosId[]> {
  const res = await request.get(rootUrl)
  return res.body
}
//POST add a todo
export async function addTodos(newTodo: Todos) {
  const res = await request
    .post(rootUrl)
    .send({ todo: newTodo.task, priority: newTodo.importance })
  return res.body
}

//DEL delete a todo
export async function deleteTodos(id: number) {
  await request.delete(`/api/v1/todos/${id}`)
  return alert('your todo has been deleted')
}

export async function updateTodo(id: number, updatedata: Todos) {
  await request.patch(`/api/v1/todos/${id}`).send(updatedata)
}
