import express from 'express'
import { getTaskById } from '../db/db'
import * as db from '../db/db'

const router = express.Router()

export default router

router.get('/', async (req, res, next) => {
  try {
    const task = db.getTask
    res.status(201).json(task)
  } catch (e) {
    next(e)
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    // const id = 0
    const url = `/api/v1/task/${id}`
    res.setHeader('Location', url)
    res.status(201).json({ location: url })
  } catch (e) {
    next(e)
  }
})
