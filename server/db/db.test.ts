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
  // I'm not sure what the problem was here? maybe it was fine
  const [id] = await db.addTask({
    name: 'test',
    details: 'database function test for add task',
    priority: 1,
    completed: false,
  })
  const result = await db.getTaskById(id)
  expect(result).toStrictEqual({
    completed: 0,
    details: 'database function test for add task',
    id: 13,
    name: 'test',
    priority: 1,
  })
})
