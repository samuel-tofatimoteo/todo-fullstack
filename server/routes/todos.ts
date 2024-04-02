import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

//get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await db.getTodos()
    res.json(todos)
    //{ todos: todos.map((todo) => todo.task) }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
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
    res.status(500).json({ message: 'Something went wrong' })
  }
})

//add todo
router.post('/', async (req, res, next) => {
  const { task } = req.body
  try {
    await db.addTodo(task)
    res.sendStatus(200)
  } catch (e) {
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
    res.status(500).json({ message: 'Something went wrong' })
  }
})
export default router
