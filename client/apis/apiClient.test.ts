import nock from 'nock'
import { beforeAll, describe, it, expect } from 'vitest'
// 🧑‍🏫  module was not importing or calling the function that should be tested
// It should
//
//   1. import the function
//   2. set up a nock for the function to use
//   3. call the function
//   4. make assertions about the return value if applicable
//   5. make an assertion that the nock was used
import { addTask } from './apiClient.ts'

beforeAll(() => {
  nock.disableNetConnect()
})

describe('add task', () => {
  it('calls the end point', async () => {
    const MOCK_TASK = {
      name: 'test',
      details: 'database function test for add task',
      priority: 1,
      completed: false,
    }
    const scope = nock('http://localhost')
      .post('/api/v1/', MOCK_TASK)
      .reply(200, 'add: done!')

    await addTask(MOCK_TASK)
    expect(scope.isDone()).toBe(true)
  })
})
