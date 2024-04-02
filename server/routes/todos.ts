import { Router } from 'express'
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodoComp,
  getTodosById,
} from '../db/todos'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const todos = await getTodos()
    res.json(todos)
  } catch (error) {
    res.sendStatus(500).json({ message: 'Error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = await getTodosById(id)
    res.json(todos)
  } catch (error) {
    res.sendStatus(500).json({ message: 'Error' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await updateTodoComp(id)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500).json({ message: 'Error' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await deleteTodo(id)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500).json({ message: 'Error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const input: string = req.body.task
    const todos = await addTodo(input)
    res.json(todos)
  } catch (error) {
    res.sendStatus(500).json({ message: 'Error' })
  }
})

export default router
