import request from 'superagent'

const rootUrl = '/api/v1'

export async function getTodos() {
  return request.get(rootUrl + '/todos').then((res) => {
    return res.body
  })
}
export async function addTodos(todo: string) {
  return request.post(rootUrl + '/todos/add').send(todo)
}
