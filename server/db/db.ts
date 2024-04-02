import { Todo, TodoID } from '../../models/Todo'
import connection from './connection'

const db = connection

export async function getTodos(): Promise<TodoID[]> {
  return db('todos').select()
}

export async function getTodosById(id: number): Promise<TodoID> {
  return db('todos').where({ id }).select().first()
}

export async function addTodo(newTodo: Todo) {
  return db('todos').insert(newTodo)
}

export async function removeTodo(id: number) {
  return db('todos').where({ id }).del()
}

export async function getIncompleteTodos(): Promise<TodoID[]> {
  return db('todos').where('complete', false).select()
}

export async function getCompleteTodos(): Promise<TodoID[]> {
  return db('todos').where('complete', true).select()
}

export async function completeTodo(id: number) {
  return db('todos').where({ id }).update({ complete: true })
}

export async function incompleteTodo(id: number) {
  return db('todos').where({ id }).update({ complete: false })
}
