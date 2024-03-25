import express from 'express'
import * as Path from 'node:path'
import * as db from './db/db'

import todos from './routes/todos'
const server = express()

server.use(express.json())

// await db.addTask({
//   what: 'dish',
//   when: '2pm',
//   done: false,
// })

// await db.deleteTaskById(13)

// await db.markDoneById(3)
const task = await db.getTask()
console.log(task)

server.use(express.json())
server.use('/api/v1/todos', todos)

// server.use('/api/v1/locations', locationRoutes)
// server.use('/api/v1/schedule', scheduleRoutes)
// server.use('/api/v1/events', eventRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
