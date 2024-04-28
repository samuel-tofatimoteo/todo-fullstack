import { Todos } from "../../models/todos";
import db from "./connection"

export function getTodos() {
    return db('todo').select('todo_info as todo', 'id')
}

export function getTodoById(id: number) {
    return db('todo').where({id}).first()
}

export function createTodos(todo: Todos) {
    const newTodo = {todo_info: todo.todo, completed: todo.complete}
    return db('todo').insert(newTodo)
}

export function updateTodos(id: number, todo: Todos) {
    console.log('db');
    
    return db('todo').where('id', id).update(todo)
}

export function deleteTodos(id: number) {
    return db('todo').where({id}).del()
}

export function getActiveTodos(completed:boolean){
    return db("todo")
    .where({ completed })
    .select("title", "id")
}

export function deleteCompletedTodos(completed: boolean) {
    return db("todo")
    .delete()
    .where({ completed })

}