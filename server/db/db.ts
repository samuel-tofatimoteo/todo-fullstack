import { Todos } from '../../models/todos'
import db from './connection'

export function getTodos() {
  return db('todos').select()
}

export function getTodoById(id: number) {
  return db('todos').where({ id }).first()
}

export function createTodos(todo: Todos) {
  const newTodo = {
    task: todo.todo,
    completed: todo.complete,
    importance: todo.importance,
  }
  return db('todos').insert(newTodo)
}

export function updateTodos(
  id: number,
  todo: { task: string; complete: boolean },
) {
  console.log('db', id)
  return db('todos').where({ id }).update(todo)
}

export function deleteTodos(id: number) {
  return db('todos').where({ id }).del()
}

export function getActiveTodos() {
  return db('todos').where({ completed: false }).select('task', 'id')
}

export function deleteCompletedTodos() {
  return db('todos').delete().where({ completed: true })
}
