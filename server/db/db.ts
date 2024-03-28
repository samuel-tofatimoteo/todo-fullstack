import connection from "./connection";
import { Task, TaskDB } from "../../Models/Task";

const db = connection


export async function getTasks() : Promise<TaskDB[]> {
    return db('tasks').select()
}

export async function getTaskById(id: number) : Promise<TaskDB>{
    return db('tasks').where({id}).select().first()
}

export async function addTask(newTask : Task) {
    return db('tasks').insert(newTask)
}

export async function deleteTask(id: number) {
    return db('tasks').where({id}).del()
}

export async function getIncomplete() : Promise<TaskDB[]>{
    return db('tasks').where('completed', false).select()
}

export async function getComplete() : Promise<TaskDB[]>{
    return db('tasks').where('completed', true).select()
}

export async function completeTask(id: number) {
    return  db('tasks').where({id}).update({completed: true})
}

export async function incompleteTask(id: number) {
    return  db('tasks').where({id}).update({completed: false})
}