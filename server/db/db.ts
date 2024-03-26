import connection from './connection'
import { toDo } from '../../models/toDo'

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
export async function toDo() {
  throw new Error('Function not implemented.')
}
export async function getToDoTaskName(taskDetails: string): Promise<toDo[]> {
  return db('toDo')
    .select(taskDetails)
    .where('task', 'LIKE', '%${taskDetails}%')
}

export async function sortThis() {
  const tasks = await db('toDo').select()
  const taskDetails = tasks.map((task) => task.task)
  taskDetails.sort()
  const filtered = taskDetails.map((task) =>
    tasks.find((check) => check.task == task),
  )
  return filtered.sort()
}
