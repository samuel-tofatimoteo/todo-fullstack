const request = require('supertest')
const app = require('../app')
const db = require('../db')

describe('Todo Routes', () => {
  beforeEach(async () => {
    await db.todos.clear()
  })

  afterAll(async () => {
    await db.close()
  })

  test('POST /todos creates a new todo', async () => {
    const response = await request(app)
      .post('/todos')
      .send({ task: 'New Todo' })
      .expect(201)

    expect(response.body).toEqual({
      id: expect.any(Number),
      task: 'New Todo',
      completed: false,
    })
  })

  test('GET /todos returns all todos', async () => {
    await db.todos.create({ task: 'Todo 1' })
    await db.todos.create({ task: 'Todo 2' })

    const response = await request(app).get('/todos').expect(200)

    expect(response.body).toHaveLength(2)
  })
})
