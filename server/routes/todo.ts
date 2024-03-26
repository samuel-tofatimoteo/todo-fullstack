import Router from 'express'
import * as db from '../db/db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const getToDos = await db.getToDo()
    res.json(getToDos)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const toDo = await db.getToDoById(id)
    res.json(toDo)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// POST /api/v1/vegetables

router.post('/', async (req, res) => {
  try {
    const toDo = req.body
    await db.addToDo(toDo)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// DELETE /api/v1/vegetables/:id

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.removeToDo(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})
router.get('/', async (req, res) => {
  try {
    const toDo = await db.sortThis()

    res.json(toDo)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

export default router
