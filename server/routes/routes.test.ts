import routes from './routes'
import { describe, it } from 'vitest'
import request from 'superagent'
import { expect, test, beforeAll, beforeEach, afterAll } from 'vitest'

import { Express } from 'express'

console.log(routes)

routes.post('/', function (req, res) {
  res.send('add: done!')
})

describe('POST /', function () {
  it('returns done message', async function () {
    const result = await request(routes).get('/').send({
      name: 'test',
      details: 'database function test for add task',
      priority: 1,
      completed: false,
    })
    console.log(result)
    expect(result.body).toEqual('add: done!')
  })
})

// routes.post('/'),
//   function (req, res) {
//     res.send('add: done!')
//   }

// request(routes, {http2: true}).post('/').send({
//   name: 'test',
//   details: 'database function test for add task',
//   priority: 1,
//   completed: false,
// }).then(response => {
//   expect(response.body.name).toEqual('test');
// expect(result.completed).toBe(false)
// })
