import request from 'superagent'
import { Task, TaskDB } from '../../Models/Task'

const rootUrl = 'api/v1/'

// export async function getTasks(): Promise<TaskDB[]>{
//     const res = await request.get(rootUrl)
//     return res.body as TaskDB[]
// }

export async function incompleteTask(id) :Promise<void>{
    await request.patch(`api/v1/return/${id}`)
}

export async function getIncompleteTasks(): Promise<TaskDB[]>{
    const res = await request.get('api/v1/incomplete')
    return res.body as TaskDB[]
}

export async function getCompleteTasks(): Promise<TaskDB[]>{
    const res = await request.get('api/v1/complete')
    return res.body as TaskDB[]
}

export async function addTask(data : Task) :Promise<void> {
    await request.post(rootUrl).send(data)
}

export async function deleteTask(id : number) :Promise<void> {
    await request.delete(`api/v1/${id}`)
}

export async function completeTask(id) :Promise<void>{
    await request.patch(`api/v1/${id}`)
}



