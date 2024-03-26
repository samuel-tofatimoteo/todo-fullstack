import express from 'express'
import * as db from '../db/db'

const router = express.Router()

export default router

router.get('/', async (req, res) => {
  try {
    const task = await db.getTask()
    res.json(task)
  } catch (e) {
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const task = await db.getTaskById(id)
    res.json(task)
  } catch (e) {
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const newTask = req.body
    const task = await db.addTask(newTask)
    res.json(task)
  } catch (e) {
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const task = await db.deleteTaskById(id)
    res.json(task)
  } catch (e) {
    res.sendStatus(500)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const task = await db.markDoneById(id)
    res.json(task)
  } catch (e) {
    res.sendStatus(500)
  }
})
