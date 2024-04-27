import { response } from 'express'
import nock from 'nock'
import { beforeAll, describe, it, vi, expect } from 'vitest'

beforeAll(() => {
  nock.disableNetConnect()
})

describe('add task', () => {
  nock('http://localhost').post('/api/v1/', {
    name: 'test',
    details: 'database function test for add task',
    priority: 1,
    completed: false,
  })
  console.log(response)
  expect(response.send).toEqual('add: done!')
})

describe('get tasks', () => {
  nock('http://localhost').get('/api/v1/').reply(200)
  console.log(response)
  expect(response.send).toEqual('add: done!')
})

// routes.post('/', function (req, res) {
//   res.send('add: done!')
// })

// describe('POST /', function () {
//   it('returns done message', async function () {
//     const result = await request(routes).get('/').send({
//       name: 'test',
//       details: 'database function test for add task',
//       priority: 1,
//       completed: false,
//     })
//     console.log(result)
//     expect(result.body).toEqual('add: done!')
//   })
// })

// describe('add task', () => {
//   it('adds task to db', async () => {
//     nock('http://localhost').post('/api/v1/', {
//             name: 'test',
//             details: 'database function test for add task',
//             priority: 1,
//             completed: false,
//           })
//     })
// })
