import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()
export default router

// Get all todos
router.get('/', async (req, res) => {
  try {
    const data = await db.getTodos()
    res.json(data)
  } catch (error) {
    res.sendStatus(500)
  }
})

// Get a single todo by its id Number
router.get('/details/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = await db.getTodoById(id)
    res.json(data)
  } catch (error) {
    res.sendStatus(500)
  }
})

// Get All Incomplete/Active todos
router.get('/active', async (req, res) => {
  try {
    const data = await db.getIncompletedTodos()
    res.json(data)
  } catch (error) {
    res.sendStatus(500)
  }
})


// Get All Complete/Inactive todos
router.get('/complete', async (req, res) => {
  try {
    const data = await db.getCompletedTodos()
    res.json(data)
  } catch (error) {
    res.sendStatus(500)
  }
})

// Add a new Todo
router.post('/', async (req, res) => {
  try {
    await db.addTodo(req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// Delete a Todo
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.delTodo(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// Update a Todo
router.patch('/update/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateTodo(id, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})