import request from 'superagent'
import { Task } from '../../models/Task'

export async function getTasks() {
  const res = await request.get('api/v1/')
  return res.body as Task[]
}

export async function getTaskById(id: number) {
  const res = await request.get(`api/v1/${id}`)
  return res.body as Task
}

// Just realised another way of making the API call functions
export async function addTask(newTask: Task) {
  return await request.post('api/v1/').send(newTask)
}

export async function delTask(id: number) {
  return await request.del(`api/v1/${id}`)
}

export async function updateTask(taskUpdate: Task) {
  const { id, name, details, difficulty, completed } = taskUpdate
  const res = await request
    .patch(`api/v1/${id}`)
    .send({ name, details, difficulty, completed })
  return res.body as Task[]
}
