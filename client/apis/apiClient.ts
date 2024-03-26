import request from 'superagent'
import { toDo } from '../../models/toDo'

const rootUrl = '/api/v1/todo'

export async function fetchVeges(): Promise<toDo[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function addVeg(newVeg: toDo): Promise<void> {
  await request.post(rootUrl).send(newVeg)
}
