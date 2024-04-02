import { Router } from 'express'

import * as db from '../db/todos'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const jobs = await db.getAllTaks()

    res.json(jobs)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const job = await db.getTaksById(Number(id))
    res.json(job)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { task_detail, priority, completed } = req.body
    const id = await db.addTask(task_detail, priority, completed)
    const url = `/api/v1/todos/${id}`
    res.setHeader('task', url)
    res.status(201).json({ task: url })
  } catch (e) {
    next(e)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)

    const { task_detail, priority, completed } = req.body
    const changedJob = await db.updateTask(id, task_detail, priority, completed)
    res.json(changedJob)
    res.status(201).json(204)
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.deleteTaskById(Number(id))
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
