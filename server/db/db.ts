import { Todo } from '../../models/Todo'
import connection from './connection'

const db = connection

export function getTodos(): Promise<Todo[]> {
  return db('todos').select()
}

export function getTodosById(id: number): Promise<Todo> {
  return db('todos').where({ id }).select().first()
}

export function addTodo(newTodo: Todo) {
  return db('todos').insert(newTodo)
}

export function removeTodo(id: number) {
  return db('todos').where({ id }).del()
}

export function completeTodo(id: number) {
  return db('todos').where({ id }).update('complete', true)
}
