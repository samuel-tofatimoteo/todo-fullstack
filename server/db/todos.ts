import connection from './connection.ts'
import { Todo } from '../../models/todo.ts'

export async function getAllTaks(): Promise<Todo[]> {
  return await connection('todos').select()
}

export async function getTaksById(id: number) {
  return await connection('todos').select().where('todos.id', id).first()
}

export async function addTask(
  task_detail: string,
  priority: BigInteger,
  completed: boolean,
): Promise<number | undefined> {
  const idArr = await connection('todos').insert({
    task_detail: task_detail,
    priority: priority,
    completed: completed,
  })
  return idArr[0]
}

export async function updateTask(
  id: number,
  task_detail: string,
  priority: number,
  completed: boolean,
) {
  await connection('todos')
    .update({
      task_detail: task_detail,
      priority: priority,
      completed: false,
    })
    .where({ id })
  const changedTask = getTaksById(id)
  return changedTask
}

export async function deleteTaskById(id: number) {
  return await connection('todos').where({ id }).del()
}
