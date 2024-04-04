import db from './connection'

export function getTodos() {
  return db('todos')
}

// export function getTodosByid() {
//   return db('todos').where({ id })
// }
