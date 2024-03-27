import express from 'express'
import * as db from '../db/db'

const router = express.Router()

export default router

//get all todos:
router.get('/', async (req, res) => {
  try {
    const todos = db.getAllTodos()
    res.json(todos)
  } catch (error) {
    console.log('Error: Could not get todos')
  }
})

//get todo by id:
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = db.getTodoById(id)
    res.json(todos)
  } catch (error) {
    console.log('Error: Could not get todos')
  }
})

//add todo:
router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    const addedTodo = db.addTodo(newTodo)
    res.json(addedTodo)
  } catch (error) {
    console.log('Error: Could not get todos')
  }
})

//update todo:
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const updateTodo = req.body
    const updatedTodo = db.updateTodo(id, updateTodo)
    res.json(updatedTodo)
  } catch (error) {
    console.log('Error: Could not get todos')
  }
})

//delete todo:
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const deletedTodo = db.deleteTodo(id)
    res.json(deletedTodo)
  } catch (error) {
    console.log('Error: Could not get todos')
  }
})
