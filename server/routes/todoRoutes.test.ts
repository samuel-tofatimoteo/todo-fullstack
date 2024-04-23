import request from 'supertest'
import { expect, describe, it } from 'vitest'
import server from '../server'

describe('POST /api/v1/todos', () => {
  it('status code should be 204 when adding new todo', async () => {
    const newTodo = { name: 'route test' }
    const response = await request(server).post('/api/v1/todos').send(newTodo)
    console.log(response.body)

    expect(response.statusCode).toBe(204)
  })

  it('status code should be 500 when adding new todo is not correct form', async () => {
    const ImposterTodo = { fakeProperty: 685 }
    const response = await request(server)
      .post('/api/v1/todos')
      .send(ImposterTodo)
    expect(response.statusCode).toBe(500)
  })
})
