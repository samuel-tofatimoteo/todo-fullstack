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
