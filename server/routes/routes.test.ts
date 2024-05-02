import request from 'supertest'
import { test, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import server from '../server'
import connection from '../db/connection'


beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})
test("GET '/'", async () => {
  const result = await request(server).get('/api/v1')
  expect(result.body).toStrictEqual(
    [
      {
        "completed": 0,
        "details": "go to supermarket and buy food for picnic",
        "id": 1,
        "name": "groceries",
        "priority": 2,
      },
      {
        "completed": 0,
        "details": "take Buster to the park and walk around the lake",
        "id": 2,
        "name": "walk dog",
        "priority": 1,
      },
      {
        "completed": 0,
        "details": "respond to work emails",
        "id": 3,
        "name": "emails",
        "priority": 1,
      },
      {
        "completed": 0,
        "details": "mow lawns, water flowers, weed pumpkin patch",
        "id": 4,
        "name": "garden",
        "priority": 3,
      },
      {
        "completed": 1,
        "details": "deploy fullstack app with database",
        "id": 5,
        "name": "finish app",
        "priority": 2,
      },
      {
        "completed": 0,
        "details": "drop off due books at library",
        "id": 6,
        "name": "return books",
        "priority": 1,
      },
      {
        "completed": 0,
        "details": "have fun on Friday Evening with your classmates! :)",
        "id": 7,
        "name": "have fun",
        "priority": 3,
      },
      {
        "completed": 0,
        "details": "call ghostbusters",
        "id": 8,
        "name": "g-g-g-g-g-hoooost",
        "priority": 1,
      },
      {
        "completed": 1,
        "details": "knit a sweater",
        "id": 9,
        "name": "knitting",
        "priority": 2,
      },
      {
        "completed": 1,
        "details": "water and power bills due this friday",
        "id": 10,
        "name": "pay bills",
        "priority": 1,
      },
      {
        "completed": 1,
        "details": "wish him a happy 80th birthday!",
        "id": 11,
        "name": "call grandpa",
        "priority": 1,
      },
      {
        "completed": 0,
        "details": "practice mindfulness for 15 minutes",
        "id": 12,
        "name": "meditate",
        "priority": 3,
      },
    ]
  )
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
  const result = await request(server).post('/api/v1/').send({
    name: 'test',
    details: 'database function test for add task',
    priority: 1,
    completed: false,
  })
  expect(result.text).toContain('add: done!')
  const res = await request(server).get('/api/v1/13')
  expect (res.body).toStrictEqual(
    {
      "completed": 0,
      "details": "database function test for add task",
      "id": 13,
      "name": "test",
      "priority": 1,
    }
  )
})
