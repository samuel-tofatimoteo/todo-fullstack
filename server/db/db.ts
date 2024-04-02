import connection from './connection'
import { Todos } from '../../models/TodosModels'

const db = connection

//write up the crud functions here

//read data:
export function getAllTodos() {
  return db('todos').select()
}

//read data by id:
export function getTodoById(id: number) {
  return db('todos').where({ id }).select()
}

//create data:
export function addTodo(newTodo: {
  task: string
  completed: boolean
  priority: string
}): Promise<Todos> {
  return db('todos').insert(newTodo)
}

//update data:
export function updateTodo(id: number, update: string) {
  return db('todos').where({ id }).update({ task: update })
}

//delete data:
export function deleteTodo(id: number) {
  return db('todos').where({ id }).del()
}
