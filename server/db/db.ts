import connection from './connection'
import toDo from '../../models/todo'

const db = connection

export async function getToDo(): Promise<toDo[]> {
  return db('toDo').select()
}

export async function getToDoById(id: number): Promise<toDo> {
  return db('toDo').where({ id }).select().first()
}

export function addToDo(task: toDo) {
  return db('toDo').insert(task)
}

export async function removeToDo(id: number) {
  return db('toDo').where({ id }).del()
}
