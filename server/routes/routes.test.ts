import request from 'supertest'
import { test, expect, vi } from 'vitest'
import server from '../server.ts'
import * as db from '../db/db.ts'
// Since we're testing the database and the routing separately,
// we should mock out the database.
vi.mock('../db/db.ts')

const MOCK_DATA = [
  {
    completed: 0,
    details: 'go to supermarket and buy food for picnic',
    id: 1,
    name: 'groceries',
    priority: 2,
  },
  {
    completed: 0,
    details: 'take Buster to the park and walk around the lake',
    id: 2,
    name: 'walk dog',
    priority: 1,
  },
]

test("GET '/'", async () => {
  vi.mocked(db.getTasks).mockImplementation(async () => {
    return MOCK_DATA
  })
  const result = await request(server).get('/api/v1')
  expect(result.body).toStrictEqual(MOCK_DATA)
})

test("POST '/'", async () => {
  const MOCK_TASK = {
    name: 'test',
    details: 'database function test for add task',
    priority: 1,
    completed: false,
  }

  // in the case of testing for effects, like adding a task we should
  // make the assertion that the mocked db function is called
  const result = await request(server).post('/api/v1/').send(MOCK_TASK)

  expect(result.text).toContain('add: done!')
  expect(db.addTask).toHaveBeenCalledWith(MOCK_TASK)
})
