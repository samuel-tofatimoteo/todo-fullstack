import { useState } from 'react'
import { Todos } from '../../models/model.ts'
import { useDelTodos, useTodos, useUpdateTodos } from '../hooks/useTodos.ts'
import AddTodo from './AddTodo.tsx'

function App() {
  const { data, isLoading, isError, error } = useTodos()
  const initialData = data && [...data]
  const [input, setInput] = useState(initialData)
  const [update, setUpdate] = useState(false)

  const delTodo = useDelTodos()
  function handleDelete(e: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    delTodo.mutate(e.target.id)
  }

  const updtTodo = useUpdateTodos()
  function handleUpdate(e: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    e.preventDefault()
    updtTodo.mutate({ id: 1, todo: 'Something' })
    console.log(e.target)
  }

  if (isLoading) {
    return <p>Loading</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  if (data)
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <div className="todo-content">
          {data.map((todo: Todos) => {
            return (
              <div key={todo.id} className="todo-container">
                {update ? (
                  <form onSubmit={handleUpdate}>
                    <input
                      className="new-"
                      placeholder={todo.task_details}
                      // onChange={handleChange}
                      name={todo.id}
                      id={todo.id}
                    ></input>
                    <p className="priority">{todo.priority} </p>
                    <p>{todo.completed ? 'completed' : 'not complete'}</p>
                    <button type="submit" id={String(todo.id)}>
                      Confirm update
                    </button>
                  </form>
                ) : (
                  <p>{todo.task_details}</p>
                )}
                <button onClick={() => setUpdate(!update)}>Update</button>

                <button id={String(todo.id)} onClick={handleDelete}>
                  delete
                </button>
              </div>
            )
          })}
        </div>
        <section className="main"></section>
        <footer className="footer"></footer>
      </>
    )
}

export default App
