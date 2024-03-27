import express from 'express'
import * as Path from 'node:path'
import * as db from './db/db'
import todosRoute from './routes/todosRoute'

const server = express()

const todos = await db.addTodo({
  id: 4,
  task: 'wash the dog',
  completed: false,
  priority: 'high',
})

console.log(todos)

server.use(express.json())
server.get('/api/v1/todos', todosRoute)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
