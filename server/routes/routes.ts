import express from 'express'
import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const allTasks = await db.getTasks()
    console.log(allTasks)
    res.json(allTasks)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const task = await db.getTaskById(id)
    res.json(task)
  } catch (error) {
    console.log(error)
  }
})
export default router
