import express from 'express'
import * as Path from 'node:path'
import * as db from './db/db'
import routes from './routes/routes'

const server = express()

server.use(express.json())

server.use('/api/v1/todos', routes)

export default server
