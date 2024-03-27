import { useState } from 'react'
import { Todos } from '../../models/model.ts'
import { useDelTodos, useTodos, useUpdateTodos } from '../hooks/useTodos.ts'
import AddTodo from './AddTodo.tsx'

function App() {
  const { data, isLoading, isError, error } = useTodos()
  const [input, setInput] = useState('')
  const [update, setUpdate] = useState(false)
  const [useId, setUseID] = useState(0)

  const delTodo = useDelTodos()
  function handleDelete(e: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    console.log(useId)
    delTodo.mutate(e.target.id)
  }

  const updtTodo = useUpdateTodos()
  function handleUpdate(e: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    e.preventDefault()
    const sendData = { id: useId, todo: input }
    updtTodo.mutate(sendData)
  }

  function doUpdate(e) {
    setUseID(Number(e.target.id))
    setUpdate(true)
  }

  function handleChange(e) {
    e.preventDefault()
    setInput(e.target.value)
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
                <p>{todo.task_details}</p>
                <p className="priority">{todo.priority}</p>
                <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
                <button
                  className="update btn"
                  id={String(todo.id)}
                  onClick={doUpdate}
                >
                  update
                </button>

                <button
                  className="delete btn"
                  id={String(todo.id)}
                  onClick={handleDelete}
                >
                  delete
                </button>
              </div>
            )
          })}
          {update && (
            <form onSubmit={handleUpdate}>
              <input
                className="new-todo"
                placeholder={`Update task with ID ${useId}`}
                onChange={handleChange}
                name="updateVal"
                id="updateVal"
                value={input}
              ></input>
              <button className="submit-todo btn" type="submit">
                Submit
              </button>
              <button className="close btn" onClick={() => setUpdate(false)}>
                Close
              </button>
            </form>
          )}
        </div>
        <section className="main"></section>
        <footer className="footer"></footer>
      </>
    )
}

export default App
