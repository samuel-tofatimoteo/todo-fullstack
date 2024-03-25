import { Todo } from '../../models/Todo'
import connection from './connection'

const db = connection

export function getTodos(): Promise<Todo[]> {
  return db('todos').select()
}

export function getTodosById(id: number): Promise<Todo> {
  return db('todos').where({ id }).select().first()
}

export function addTodo(newVegObj: Todo) {
  return db('todos').insert(newVegObj)
}

export function removeTodo(id: number) {
  return db('todos').where({ id }).del()
}
