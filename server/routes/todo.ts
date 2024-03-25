import * as db from '../db/db'
import express from 'express'

const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    const { taskDetails, priority, completed } = req.body
    res.setHeader('toDo', URL)
    res.status(201).json({ toDo: URL })
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
  } catch (e) {
    next(e)
  }
})
router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)

    const getToDo = {
      id: id,
    }

    res.json(getToDo)
  } catch (e) {
    next(e)
  }
})
router.patch('/:id', async (req, res, next) => {
  try {
    const {} = req.body
    const id = Number(req.body.id)
  } catch (e) {
    next(e)
  }
})
