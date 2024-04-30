import { response } from 'express'
import nock from 'nock'
import { beforeAll, describe, it, vi, expect, test } from 'vitest'

beforeAll(() => {
  nock.disableNetConnect()
})

test('add task', () => {
  nock('http://localhost').post('/api/v1/', {
    name: 'test',
    details: 'database function test for add task',
    priority: 1,
    completed: false,
  })
  console.log(response)
  expect(response.send).toEqual('add: done!')
})

test('get tasks', () => {
  nock('http://localhost').get('/api/v1/').reply(200)
  console.log(response)
  expect(response.send).toEqual('add: done!')
})

// USE THIS ENTIRE FILE AS BOILERPLATE FOR YOUR NOCK TESTS. ALTER TESTS TO FIT YOUR DATA AND COMPONENTS:
//https://github.com/harakeke-2024/code-from-class/blob/main/week3-async-apis-useQuery/2-testing-reactQuery/client/components/__tests__/Sharks.test.tsx

// IMPORTANT: PUT THIS AT THE TOP OF YOUR FILE (SHOULD STILL BE COMMENTED OUT)
//@vitest-environment jsdom
