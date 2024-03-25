import connection from './connection'
const db = connection
import { Todos } from '../../models/todos'

export function getTask() {
  return db('todos')
}

export function getTaskById(id: number) {
  return db('todos').where({ id })
}

export function addTask(task: Todos) {
  return db('todos').insert(task)
}

export function deleteTaskById(id: number) {
  return db('todos').where({ id }).del()
}

export function markDoneById(id: number) {
  return db('todos').where({ id }).update({ done: true })
}
