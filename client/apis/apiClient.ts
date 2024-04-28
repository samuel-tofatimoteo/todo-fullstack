import request from "superagent"
import { TodoId, Todos } from "../../models/todos"
const rootUrl = '/api/todo'

export async function getTodos(): Promise<TodoId[]> {
    const res = await request.get(rootUrl)
    console.log(res.body);
    
    return res.body as TodoId[]
}

export async function getTodoById(id: number) {
    const res = await request.get(`${rootUrl}/${id}`)
    return res.body
}

export async function addNewTodo(newTodo: Todos){
    console.log(newTodo);
    const res = await request
    .post(rootUrl)
    .send(newTodo)
    return res.body
} 

export async function updateTodos(id: number, updatedTodo: Todos){
    console.log(`${rootUrl}/${id}`);
    console.log(updatedTodo);
    
    const res = await request
    .put(`${rootUrl}/${id}`)
    .send(updatedTodo)
    return res.body
}

export async function deleteTodo(id: number) {
    await request.delete(`${rootUrl}/${id}`)
}

export async function getActiveTodos(completed: boolean){
    const res = await request.get(`${rootUrl}/active?completed=${completed}`)
    return res.body
}

export async function deleteCompletedTodos(completed: boolean){
    await request.delete(`${rootUrl}/completed?completed=${completed}`)
}