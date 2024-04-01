import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()
export default router

router.get('/', async (req, res) => {
  const data = await db.getTodos()
  res.json(data)
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const task = await db.getTodosById(id)

  if (task) {
    res.json(task)
  } else {
    res.sendStatus(500)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateTodo(id, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    await db.addTodo(req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    await db.deleteTodo(id)
  } catch (e) {
    next(e)
  }
})
