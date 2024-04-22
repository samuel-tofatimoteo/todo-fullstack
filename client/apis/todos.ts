import request from 'superagent'

const rootUrl = 'api/v1/todos'

export async function getTodos() {
  const res = await request.get(`${rootUrl}`)
  return res.body
}
