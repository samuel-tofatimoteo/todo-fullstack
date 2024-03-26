import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

//get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await db.getTodos()

    res.json({ todos: todos.map((todo) => todo.task) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

//get todo by id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const todos = await db.getTodosById(Number(id))
    res.json(todos)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

//add todo
router.post('/', async (req, res, next) => {
  try {
    const { task } = req.body
    const id = await db.addTodo(task)
    const url = `/api/v1/todos/${id}`
    res.setHeader('todos', url)
    res.status(201).json({ task: url })
  } catch (e) {
    next(e)
  }
})

//update completion status
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.completeTodo(Number(id))
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
export default router
