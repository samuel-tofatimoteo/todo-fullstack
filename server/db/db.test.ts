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

test('Testing if db function addTodo creates a new todo called `test`', async () => {
  await db.addTodo({
    name: 'test',
  })
  const result = await db.getTodoById(4)
  console.log(result)
  expect(result[0].name).toBe('test')
})
