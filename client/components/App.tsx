import { useState } from 'react'
import { Task, Todos } from '../../models/todo'
import {
  useDelTodos,
  useMarkTodos,
  useTodos,
  useUpdateTodos,
} from '../hooks/useTodos.ts'
import AddTodo from './AddTodo.tsx'

function App() {
  const { data, isLoading, isError, error } = useTodos()
  const [update, setUpdate] = useState('')
  const [edit, setEdit] = useState(0)
  const updateTodo = useUpdateTodos()
  const delTodo = useDelTodos()
  const markComplete = useMarkTodos()

  function handleDelete(e) {
    delTodo.mutate(e.target.id)
  }

  function handleComplete(e) {
    const mark = { id: e.target.id, completed: e.target.checked }
    markComplete.mutate(mark)
  }

  function handleUpdate(e) {
    updateTodo.mutate({ id: edit, task: update })
    setEdit(0)
  }

  function handleEdit(e) {
    setEdit(e.target.id)
  }

  function handleChange(e: any) {
    setUpdate(e.target.value)
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
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                  <div className="view">
                    {todo.completed ? (
                      <input
                        id={String(todo.id)}
                        className="toggle"
                        type="checkbox"
                        onClick={handleComplete}
                      />
                    ) : (
                      <input
                        id={String(todo.id)}
                        className="toggle"
                        type="checkbox"
                        checked
                        onClick={handleComplete}
                      />
                    )}
                    {edit == todo.id ? (
                      <input
                        className="edit"
                        value={update}
                        onChange={handleChange}
                        placeholder={todo.task}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') {
                            setEdit(0)
                          }
                          if (e.key === 'Enter') {
                            handleUpdate()
                          }
                        }}
                      ></input>
                    ) : (
                      <label id={String(todo.id)} onDoubleClick={handleEdit}>
                        {todo.task}
                      </label>
                    )}
                    <button
                      id={String(todo.id)}
                      className="destroy"
                      onClick={handleDelete}
                    ></button>
                  </div>
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
