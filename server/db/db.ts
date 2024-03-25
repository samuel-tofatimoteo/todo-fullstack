import connection from "./connection";

const db = connection


export async function getTasks() {
    return db('tasks').select()
}


export async function getTaskById(id: number){
    return db('tasks').where({id}).select()
}