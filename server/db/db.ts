import connection from './connection'
import { Task, TaskUpdate } from '../../models/task'

const db = connection
// const newTodoObj =

export async function getTasks(): Promise<Task[]> {
  return await db('tasks').select()
}

export async function getTaskById(id: number): Promise<Task> {
  return await db('tasks').where({ id }).select().first()
}

export async function addTask(newTaskObj: Task) {
  return await db('tasks').insert(newTaskObj)
}

export async function deleteTask(id: number): Promise<Task> {
  return await db('tasks').where({ id }).del()
}

export async function updateTask(
  id: number,
  updateTask: TaskUpdate,
): Promise<Task> {
  return await db('tasks').where({ id }).update({ updateTask })
}
