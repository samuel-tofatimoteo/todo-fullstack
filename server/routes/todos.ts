import * as db from '../db/db'
import express from 'express'

const router = express.Router()

//GET all todos
router.get('/', async (req, res) => {
  try {
    const todos = await db.getAllTodos()
    res.json(todos)
  } catch (error) {
    res.sendStatus(500)
    console.log('There was an error retrieving the data')
  }
})

//GET a todo by ID
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = await db.getTodoById(id)
    res.json(todos)
  } catch (error) {
    res.sendStatus(500)
    console.log('There was an error retrieving the data')
  }
})

//POST add a new todo
router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    const todos = await db.addTodo(newTodo)
    res.json(todos)
  } catch (error) {
    res.sendStatus(500)
    console.log('There was an error retrieving the data')
  }
})

//PATCH update a todo
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const updateTodo = req.body
    const todos = await db.updateTodo(id, updateTodo)
    res.json(todos)
  } catch (error) {
    res.sendStatus(500)
    console.log('There was an error retrieving the data')
  }
})

//DELETE a todo
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = await db.deleteTodo(id)
    res.json(todos)
  } catch (error) {
    res.sendStatus(500)
    console.log('There was an error retrieving the data')
  }
})

export default router
