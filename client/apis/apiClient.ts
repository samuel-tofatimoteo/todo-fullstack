import request from 'superagent'
import { Task, TaskDB } from '../../Models/Task'

const rootUrl = 'api/v1/'

export async function getTasks(): Promise<TaskDB[]>{
    const res = await request.get(rootUrl)
    return res.body as TaskDB[]
}

