import * as db from '../db/db'
import { Todos } from '../../models/todos'
import express from 'express'

const router = express.Router()

export default router

router.get('/', async (req, res) => {
  try {
    const todos = await db.getAllTodos()
    res.json(todos)
  } catch (error) {
    console.log('There was an error try again!')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = await db.getTodoById(id)
    res.json(todos)
  } catch (error) {
    console.log('There was an error try again!')
  }
})
