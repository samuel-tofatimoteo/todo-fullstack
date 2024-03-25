import connection from './connection'

const db = connection

function getAllTodos() {
  return db('todos').select()
}

function getTodoById(id: number) {
  return db('todo').where({ id }).select()
}
