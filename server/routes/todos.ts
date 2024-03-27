import { Router } from 'express'
import * as db from '../db/db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const todos = await db.getTodos()
    res.json(todos)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const todo = await db.getTodosById(id)
    res.json(todo)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    await db.addTodo(newTodo)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const updatedTodo = req.body
  try {
    await db.updateTodo(id, updatedTodo)
    res.sendStatus(204)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.removeTodo(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})
export default router
