import express from 'express'
import * as db from '../db/db'
import { Task } from '../../Models/Task'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const allTasks = await db.getTasks()
        res.json(allTasks) 
    } catch (error) {
        console.log(error);
    }
}
)

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        const task = await db.getTaskById(id)
        res.json(task)
    } catch (error) {
        console.log(error) 
    }
})

router.post('/', async (req, res) => {
    const newTask = req.body
    try {
        await db.addTask(newTask)
        res.send('add: done!')
    } catch (error) {
        console.log(error) 
    }
})

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        await db.deleteTask(id)
        res.send('delete: done!')
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router