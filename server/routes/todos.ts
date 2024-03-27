import { Router } from 'express'
import {
  getTodos,
  getTodosById,
  markedComplete,
  getTodosByPriority,
  addTodo,
  delTodo,
  updateDetails,
} from '../db/db'
import { Todos } from '../../models/model'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const todos = await getTodos()
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = await getTodosById(id)
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = await markedComplete(id)
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

router.patch('/update/:id', async (req, res) =>{
  try {
    const input = req.body
    const id = Number(req.params.id)
    await updateDetails(id, input.newTodo)
    res.json({yes: "successful"})
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
  
})

router.get('/priority/:priority', async (req, res) => {
  try {
    const priority = Number(req.params.priority)
    const todos = await getTodosByPriority(priority)
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

router.post('/add', async (req, res) => {
  try {
    const todoData:Todos = req.body
    const todos = await addTodo(todoData)
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = await delTodo(id)
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

export default router
