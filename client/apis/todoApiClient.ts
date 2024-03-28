import request from 'superagent'
import { Todos } from '../../models/TodosModels'

const rootUrl = '/api/v1/todos'

export async function getTodos(): Promise<Todos[]> {
  const res = await request.get(rootUrl)
  console.log(res)
  return res.body as Todos[]
}
