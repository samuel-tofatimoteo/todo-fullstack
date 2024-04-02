import request from 'superagent'
import { Todo } from '../../models/Todo'

const rootUrl = '/api/v1'

export function getTodos(): Promise<Todo[]> {
  return request.get(rootUrl + '/todos').then((res) => {
    return res.body.todos
  })
}

export function addTodo(newTodo: Todo) {
  request.post(rootUrl + '/todos').send(newTodo)
}
