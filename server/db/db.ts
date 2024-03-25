import connection from './connection'
import { Todos } from '../../models/todos'

const db = connection

function getAllTodos() {
  return db('todos').select()
}

function getTodoById(id: number) {
  return db('todo').where({ id }).select()
}

function addTodo(newTodo: Todos): Promise<Todos> {
  return db('todos').insert(newTodo)
}

function updateTodo(id: number, update: string) {
  return db('todos').where({ id }).update(update)
}

function deleteTodo(id: number) {
  return db('todos').where({ id }).del()
}
