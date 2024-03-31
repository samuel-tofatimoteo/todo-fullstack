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

const router = Router()

// gets all the todos
router.get('/', async (req, res) => {
  try {
    const todos = await getTodos()
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

// gets specific todo by id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = await getTodosById(id)
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

// changes todo from incomplete to complete or the other way around
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const comp: boolean = req.body.completed
    const todos = await markedComplete(id, comp)
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

// updates the todo task from an input
router.patch('/update/:id', async (req, res) => {
  try {
    const input = req.body.task
    const id = Number(req.params.id)
    await updateDetails(id, input)
    res.json({ yes: 'successful' })
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

// returns a list of todos based on input priority
router.get('/priority/:priority', async (req, res) => {
  try {
    const priority = Number(req.params.priority)
    const todos = await getTodosByPriority(priority)
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

// adds a new todo
router.post('/add', async (req, res) => {
  try {
    const input: string = req.body.task
    const todos = await addTodo(input)
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error' })
  }
})

// deletes a todo
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
