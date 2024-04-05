import React from 'react'
import { TaskId } from '../models/todo'
import { useTodos, useRemoveTodos } from '../hooks/useTodos'
import { CompleteTodos } from '../hooks/useTodos'

function TodoList() {
  const { data, isLoading, isError, error } = useTodos()
  const compTodo = CompleteTodos()
  const removeTodos = useRemoveTodos()

  function handleComplete(e: React.MouseEvent<HTMLInputElement>) {
    compTodo.mutate(e.target.id)
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    removeTodos.mutate(e.target.id)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  if (data) {
    return (
      <>
        <section className="main">
          <ul className="todo-list">
            {data.map((todo: TaskId) => (
              <li key={todo.id}>
                <div className="view">
                  <input
                    onClick={handleComplete}
                    className="toggle"
                    type="checkbox"
                    id={String(todo.id)}
                    defaultChecked={todo.completed}
                  />
                  <label>{todo.task}</label>
                  <button
                    onClick={handleClick}
                    className="destroy"
                    id={String(todo.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </>
    )
  }

  return null
}

export default TodoList
