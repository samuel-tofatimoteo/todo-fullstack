import request from 'supertest'
import { test, expect, vi } from 'vitest'
import server from '../server'
import { addTask, getTasks } from '../db/db.ts'

// you need to mock out the database in order to test all of your routes, like below:
vi.mock('../db/db.ts')

// add some fake data in (like this array of objects below) to use in your GET / test:
const fakeData = [
  {
    completed: true,
    details: 'go to supermarket and buy food for picnic',
    id: 1,
    name: 'groceries',
    priority: 2,
  },
  {
    completed: false,
    details: 'take Buster to the park and walk around the lake',
    id: 2,
    name: 'walk dog',
    priority: 1,
  },
]

// Currently your test is not passing because you are not mocking out the database call, please rework your code based on this example
test("GET '/'", async () => {
  vi.mocked(getTasks).mockImplementation(async () => {
    return fakeData
  })
  const result = await request(server).get('/api/v1')
  expect(result.body).toStrictEqual(fakeData)
})

// Almost there with this one! Please refactor your own code so you separate out the fake data you are sending to the server, and test that your addTask db function has been called as a result. See example below:
test("POST '/'", async () => {
  const fakeData = {
    name: 'test',
    details: 'database function test for add task',
    priority: 1,
    completed: false,
  }
  const result = await request(server).post('/api/v1/').send(fakeData)
  expect(result.text).toContain('add: done!')
  expect(addTask).toHaveBeenCalledWith(fakeData)
})
