import connection from "./connection";

const db = connection

export async function getTodos() {
  return await db('todos').select()
}

export async function getTodoById(id: number) {
  return await db('todos').where({id}).select()
}

export async function getIncompletedTodos() {
  return await db('todos').where('completed', false).select()
}

export async function getCompletedTodos() {
  return await db('todos').where('completed', true).select()
}

export async function addTodo() {}