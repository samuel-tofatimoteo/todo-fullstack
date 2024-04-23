import request from 'supertest'
import { expect, describe, it } from 'vitest'
import server from '../server'
import { beforeAll, beforeEach, afterAll } from 'vitest'
import connection from '../db/connection'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

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
