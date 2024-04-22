import { NewTodo, Todo, TodoUpdate } from "../../models/models";
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

export async function addTodo(newTodo: NewTodo) {
  return await db('todos').insert(newTodo)
}

export async function delTodo(id: number) {
  return db('todos').where('id', {id}).del()
}

export async function updateTodo(id: number, updateTodo: TodoUpdate) {
  return await db('todos').where('id', {id}).insert(updateTodo)
}