import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import connection from './connection'
import { addTodo, getTodos } from './db'
import { Todo } from '../../models/Todo'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

//test addTodo works:
describe.skip('addTodo', () => {
  it('should insert a task into todos table', async () => {
    const newTodo: Todo = {
      task: 'test',
      complete: false,
    }
    await addTodo(newTodo)
    const todoList = await getTodos()
    expect(todoList).toHaveLength(4)
    expect(todoList[3].task).toBe('test')
  })
})
