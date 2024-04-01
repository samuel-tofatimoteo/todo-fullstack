import express from 'express'
import * as Path from 'node:path'
import * as db from './db/db'
const server = express()

server.use(express.json())

// const todos = await db.getTodos()

// console.log(todos)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
