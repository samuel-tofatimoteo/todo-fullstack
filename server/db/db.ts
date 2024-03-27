import connection from "./connection"

const db = connection

//write up the crud functions here

//read data
export function getAllTodos(){
    return db('todos').select()
}

export function getTodoById(id: number) {
    return db('todos').where({ id }).select()
  }
  
  export function addTodo(newTodo: Todos): Promise<Todos> {
    return db('todos').insert(newTodo)
  }
  
  export function updateTodo(id: number, update: Todos) {
    return db('todos').where({ id }).update(update)
  }
  
  export function deleteTodo(id: number) {
    return db('todos').where({ id }).del()
  }