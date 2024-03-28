import request from 'superagent'
import { Task, TaskDB } from '../../Models/Task'

const rootUrl = 'api/v1/'

export async function getIncompleteTasks(): Promise<TaskDB[]>{
    const res = await request.get(`${rootUrl}incomplete`)
    return res.body as TaskDB[]
}

export async function getCompleteTasks(): Promise<TaskDB[]>{
    const res = await request.get(`${rootUrl}complete`)
    return res.body as TaskDB[]
}

export async function addTask(data : Task) :Promise<void> {
    await request.post(rootUrl).send(data)
}

export async function deleteTask(id : number) :Promise<void> {
    await request.delete(`api/v1/${id}`)
}

export async function completeTask(id : number) :Promise<void>{
    await request.patch(`${rootUrl}${id}`)
}

export async function incompleteTask(id : number) :Promise<void>{
    await request.patch(`${rootUrl}return/${id}`)
}



