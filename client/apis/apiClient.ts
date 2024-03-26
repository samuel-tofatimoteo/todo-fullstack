import request from 'superagent'
import { Todos } from '../../models/todos'

const rootUrl = '/api/v1/todos'

async function getTodos(): Promise<Todos[]> {
  const res = await request.get(rootUrl)
  console.log(res.body)

  return res.body
}

export default getTodos
