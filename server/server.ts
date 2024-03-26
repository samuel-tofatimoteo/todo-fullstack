import express from 'express'
import * as Path from 'node:path'
import todo from './routes/todo'
const server = express()

server.use(express.json())
server.use('/api/v1/todo', todo)

// const toDo = await db.addToDo({
//   taskDetails: 'walk the cat',
//   priority: 2,
//   completed: false,
// })
// console.log(toDo)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
