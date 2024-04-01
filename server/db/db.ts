import connection from './connection'
import { Todo } from '../../models/todo'

const db = connection
// const newTodoObj =

export function getTodos(): Promise<Todo[]> {
  return db('todo').select()
}

export function getTodosById(id: number): Promise<Todo> {
  return db('todo').where({ id }).select().first()
}

export function addTodo(newTodoObj: Todo) {
  return db('todo').insert(newTodoObj)
}

export function deleteTodo(id: number): Promise<Todo> {
  return db('todo').where(id).del()
}

export function updateTodo(id: number): Promise<Todo> {
  return db('todo').where(id)
}
