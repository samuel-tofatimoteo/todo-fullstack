import { Todos } from '../../models/model'
import db from './connection'

export function getTodos() {
  return db('todos').select()
}

export function getTodosById(id: number) {
  return db('todos').where({ id })
}

export function markedComplete(id: number) {
  return db('todos').where({ id }).update({ completed: true })
}

export function getTodosByPriority(priority: number) {
  return db('todos').where({ priority })
}

export function addTodo(todoData: Todos) {
  return db('todos').insert(todoData)
}

export function delTodo(id: number) {
  return db('todos').delete().where({ id })
}

export function updateDetails(id:number, input: string) {
  return db('todos').where({id}).update({task_details: input})
}
