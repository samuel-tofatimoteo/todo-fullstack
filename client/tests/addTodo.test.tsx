// @vitest-environment jsdom
import { beforeAll, describe, it, vi, expect } from 'vitest'
import { renderRoute } from './test-setup'
import nock from 'nock'

vi.mock('@auth0/auth0-react')

beforeAll(() => {
  nock.disableNetConnect()
})

describe('...frontend test: AddTodo...', () => {
  it('add new todo', async () => {
    nock('http://localhost')
      .get('/api/v1/todos')
      .reply(200, { todos: [] })
      .persist()

    const { user, ...screen } = renderRoute('/')

    //add input to form

    const inputTask = await screen.findByLabelText('Enter your task:')
    user.type(inputTask, 'Test')

    const addTodoBtn = await screen.findByRole('button', { name: 'submitBtn' })
    expect(addTodoBtn).toBeVisible()

    const createScope = nock('http://localhost', {})
      .post('/api/v1/todos', {
        todo: { task: 'Test', complete: false },
      })
      .reply(201)

    await user.click(addTodoBtn)
    expect(createScope.isDone()).toBe(true)
  })
})
