import db from './connection'

// get all todos
export function getTodos() {
  return db('todos').select()
}

// get specific todo by id
export function getTodosById(id: number) {
  return db('todos').where({ id })
}

// changes status of task from incomplete to complete or the other way around
export function markedComplete(id: number, comp: boolean) {
  return db('todos').where({ id }).update({ completed: !comp })
}

// gets todos based on specific priority
export function getTodosByPriority(priority: number) {
  return db('todos').where({ priority })
}

// adds a new todo
export function addTodo(input: string) {
  return db('todos').insert({ task: input, priority: 1, completed: false })
}

// deletes a specific todo
export function delTodo(id: number) {
  return db('todos').delete().where({ id })
}

// updates the task of a specific todo
export function updateDetails(id: number, input: string) {
  return db('todos').where({ id }).update({ task: input })
}
