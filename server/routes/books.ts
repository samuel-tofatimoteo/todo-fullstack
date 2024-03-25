import request from 'superagent'
import express from 'express'
import * as db from '../../server/db/db'

const router = express.Router()
export default router

router.get('/', async (req, res) => {
  try {
    const AllBooks = await db.getBooks()
    res.send(AllBooks)
  } catch (e) {
    console.log(e)
  }
})

router.post('/', async (req, res) => {
  try {
    const added = await db.addBooks(req.body)
    res.send(added)
  } catch (e) {
    console.log(e)
  }
})

router.delete('/:title', async (req, res) => {
  try {
    const title = req.params.title
    const deleteBook = await db.delBooksByTitle(title)
    res.send(deleteBook)
  } catch (e) {
    console.log(e)
  }
})
