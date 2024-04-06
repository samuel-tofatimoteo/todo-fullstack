import { Router } from 'express'
import { Todo } from '../../models/Todo.ts'
import * as db from '../db/db.ts'

const router = Router()

// /api/v1/todos

//get all todos
router.get('/', async (req, res) => {
  try {
    const allTodos = await db.getTodos()
    res.json(allTodos)
  } catch (error) {
    console.log(error)
    res.sendStatus(500).json({ message: 'Something went wrong' })
  }
})

//get todo by id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const todos = await db.getTodosById(id)
    res.json(todos)
  } catch (error) {
    console.log(error)
    res.sendStatus(500).json({ message: 'Something went wrong' })
  }
})

//get all complete todos
router.get('/done', async (req, res) => {
  try {
    const allDoneTodos = await db.getCompleteTodos()
    res.json(allDoneTodos)
  } catch (error) {
    console.log(error)
    res.sendStatus(500).json({ message: 'Something went wrong' })
  }
})

//get all incomplete todos
router.get('/not-done', async (req, res) => {
  try {
    const notDoneTodos = await db.getIncompleteTodos()
    res.json(notDoneTodos)
  } catch (error) {
    console.log(error)
    res.sendStatus(500).json({ message: 'Something went wrong' })
  }
})

//add todo
router.post('/', async (req, res, next) => {
  const todo: Todo = req.body
  try {
    await db.addTodo(todo)
    res.sendStatus(201)
  } catch (e) {
    console.log(e)

    next(e)
  }
})

//update completion status
router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.completeTodo(id)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500).json({ message: 'Something went wrong' })
  }
})

export default router
