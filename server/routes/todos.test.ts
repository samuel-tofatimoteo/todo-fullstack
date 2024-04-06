import request from 'supertest'
import server from '../server'
import { expect, describe, it } from 'vitest'
import { Todo } from '../../models/Todo'

//test post route for adding todo works:
describe('POST /api/v1/todos', () => {
  it('should return 201 qwhen inserting a new song', async () => {
    const newTodo: Todo = {
      task: 'take cat swimming',
      complete: false,
    }

    const response = await request(server).post('/api/v1/todos').send(newTodo)

    expect(response.statusCode).toBe(201)
  })

  it('should return error when inserting incomplete data', async () => {
    const fakeTodo = {}

    const response = await request(server).post('/api/v1/todos').send(fakeTodo)
    //console.log(response)
    expect(response.status).toBe(500)
  })
})

//Was working, not sure what error is. Need to come back
