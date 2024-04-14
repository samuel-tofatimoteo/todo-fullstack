import { TodoIntrfc } from "../../models/model";
import db from "./connection"

export function getTodos() {
    return db('todo').select('todo_info as todo', 'id')
}

export function getTodoById(id: number) {
    return db('todo').where({id}).first()
}

export function createTodos(todo: TodoIntrfc) {
    const newTodo = {todo_info: todo.todo, completed: todo.complete}
    return db('todo').insert(newTodo)
}

export function updateTodos(id: number, todo: TodoIntrfc) {
    return db('todo').where({id})
        .update(todo).then(() => {
            return getTodoById(id)
        })
}

export function deleteTodos(id: number) {
    return db('todo').where({id}).del()
}

export function getActiveTodos(completed:boolean){
    return db("todo")
    .where({ completed })
    .select("title", "id")
    // const query = db("todos")
    //   .join("users", "users.id","=","todos.userId")
    //   .select("todos.*");
    //  if (completed !== null) {query.where("completed", completed)}
    //  if (userId != null) {query.where("userId", userId)}
    //  return query
}

export function deleteCompletedTodos(completed: boolean) {
    return db("todo")
    .delete()
    .where({ completed })
//     return db("todos")
//     .where({ is_completed: completed, user_id: userId })
//     .delete()
}