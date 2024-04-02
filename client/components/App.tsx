import { useState } from 'react'
import { Todos } from '../../models/todo'
import {
  useDelAllCompleted,
  useDelTodos,
  useMarkAllCompleted,
  useMarkTodos,
  useTodos,
  useUpdateTodos,
} from '../hooks/useTodos.ts'
import AddTodo from './AddTodo.tsx'

function App() {
  const { data, isLoading, isError, error } = useTodos()
  const [update, setUpdate] = useState('')
  const [edit, setEdit] = useState(0)
  const [tick, setTick] = useState(true)
  const [all, setAll] = useState(true)
  const updateTodo = useUpdateTodos()
  const delTodo = useDelTodos()
  const delAll = useDelAllCompleted()
  const markComplete = useMarkTodos()
  const markAll = useMarkAllCompleted()

  function handleDelete(e: any) {
    delTodo.mutate(e.target.id)
  }

  function delCompleted() {
    delAll.mutate()
  }

  function handleComplete(e: any) {
    const mark = { id: e.target.id, completed: e.target.checked }
    markComplete.mutate(mark)
  }

  function handleUpdate() {
    updateTodo.mutate({ id: edit, task: update })
    setEdit(0)
  }

  function handleEdit(e: any) {
    setEdit(e.target.id)
  }

  function handleChange(e: any) {
    setUpdate(e.target.value)
  }

  function selectAll(e: any) {
    markAll.mutate(e.target.checked)
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
        <section id="app" className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <AddTodo />
          </header>
          <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" onClick={selectAll} defaultChecked={false}/>
          <label htmlFor="toggle-all">Mark all as complete</label>
          <div className="todo-content">
          <ul className="todo-list">
            {data.map((todo: Todos) => {
              if(all ? true : todo.completed == tick )
                return (
                  <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <div className="view">
                      <input
                        id={String(todo.id)}
                        className="toggle"
                        type="checkbox"
                        checked={!todo.completed}
                        onClick={handleComplete}
                        aria-label={`Allows the user to mark task as incomplete/complete`}
                      />
                      {edit == todo.id ? (
                        <input
                          className="edit"
                          value={update}
                          onChange={handleChange}
                          placeholder={todo.task}
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === 'Escape') {
                              setEdit(0)
                              setUpdate('')
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
                      >×</button>
                    </div>
                  </li>
                )
            })}
          </ul>
        </div>
        </section>
        <footer className="footer">
          <span className='todo-count'><strong>{data.filter((item:Todos)=> item.completed == false).length}</strong> item(s) left</span>
          <ul className='filters'>
            <li><a className={all ? 'selected' : ""} href="/#" onClick={()=>setAll(true)}>All</a></li>
            <li><a className={!all ? !tick ? 'selected' : "" : ""} href="/#" onClick={()=>{
              setAll(false) 
              setTick(false)}}>Active</a></li>
            <li><a className={!all ? tick ? 'selected' : "" : ""} href="/#" onClick={()=>{
              setAll(false) 
              setTick(true)
              }}>Completed</a></li>
          </ul>
          <button className="clear-completed" onClick={delCompleted}>Clear completed</button>
        </footer>
              </section>
        <footer className='info'></footer>
      </>
    )
}

export default App
