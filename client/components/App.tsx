import { useState } from 'react'
import { Todos } from '../../models/todo'
import { useDelTodos, useTodos, useUpdateTodos } from '../hooks/useTodos.ts'
import AddTodo from './AddTodo.tsx'

function App() {
  const { data, isLoading, isError, error } = useTodos()
  const [input, setInput] = useState('')
  const [updateTask, setUpdateTask] = useState('')
  const [update, setUpdate] = useState(false)
  const [useId, setUseID] = useState(0)

  const delTodo = useDelTodos()
  function handleDelete(e: React.ButtonHTMLAttributes<HTMLButtonElement>) {
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
          <ul className="todo-list">
            {data.map((todo: Todos) => {
              return (
                <li key={todo.id} className="">
                  <div className="view">
                    <input className="toggle" type="checkbox" checked />
                    <label
                      id={String(todo.id)}
                      onDoubleClick={(e) => console.log(e.target.id)}
                    >
                      {todo.task}
                    </label>
                    <button
                      id={String(todo.id)}
                      className="destroy"
                      onClick={handleDelete}
                    ></button>
                  </div>
                  <input className="edit" value={updateTask}></input>
                </li>
              )
            })}
          </ul>
        </div>
        <section className="main"></section>
        <footer className="footer"></footer>
      </>
    )
}

export default App
