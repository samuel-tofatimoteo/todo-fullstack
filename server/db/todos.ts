import db from './connection'

export function getTodos() {
  return db('todos')
}

export function getTodosById(id: number) {
  return db('todos').where({ id })
}

export function addTodo(newTask: string) {
  return db('todos').insert({
    task: newTask,
    priority: 'soon',
    completed: false,
  })
}

export function updateTodoComp(id: number) {
  return db('todos').where({ id }).update({ completed: true })
}

export function deleteTodo(id: number) {
  return db('todos').where({ id }).delete()
}
