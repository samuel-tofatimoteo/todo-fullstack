import connection from './connection'
import { Todo } from '../../models/todo'

const db = connection

export function getTodos(): Promise<Todo[]> {
  return db('todos').select()
}

export function getTodosById(id: number): Promise<Todo> {
  return db('todos').where({ id }).select().first()
}

export function addTodo(newTodoObj: Todo) {
  return db('todos').insert(newTodoObj)
}
export function updateTodo(id: number, updatedTodo: Todo) {
  return db('todos').where({ id }).update(updatedTodo)
}

export function removeTodo(id: number) {
  return db('todos').where({ id }).del()
}
