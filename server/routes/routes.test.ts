import request from 'supertest'
import { test, expect } from 'vitest'
import server from '../server'

// I would recommend updating this test so it tests for finding certain content inside the result. Example:

// test("GET '/'", async () => {
//   const response = await request(server).get('/')
//   expect(response.text).toContain("Welcome to ascii art")
// })

test("GET '/'", async () => {
  const result = await request(server).get('/')
  console.log(result.text)
  expect(result.text).toHaveLength(12)
})

// test("POST '/' new task", async () => {
//   const result = await request(router).post('/').send({
//     name: 'test',
//     details: 'database function test for add task',
//     priority: 1,
//     completed: false,
//   })
//   console.log(result)
//   expect(result.text).toContain('add: done!')
// })

test("POST '/'", async () => {
  const result = await request(server)
    .post('/api/v1/')
    .send({
      name: 'test',
      details: 'database function test for add task',
      priority: 1,
      completed: false,
    })
    .type('form')
  console.log('post result', result)

  // here I would recommend testing that the status code is 200
  expect(result.statusCode).toBe(200)
})
