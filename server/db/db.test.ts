import { expect, test, beforeAll, beforeEach, afterAll } from 'vitest'

import * as db from './db'
import connection from './connection'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

// this test looks correctly written, it is failing because when you add a task into your database it does not include an ID (you'll see it shows up as null in the id column in your database.)
// to fix this issue and make the test pass, see your migrations schema for further guidance.
test('database function test for add task', async () => {
  await db.addTask({
    name: 'test',
    details: 'database function test for add task',
    priority: 1,
    completed: false,
  })
  const result = await db.getTaskById(13)
  expect(result.name).toBe('test')
})
