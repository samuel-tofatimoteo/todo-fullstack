import React from 'react'
import { Todo } from '../../models/todo'
import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/apiClient'

export default function TodoList() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => api.fetchTodos(),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const todos = data

  return (
    <div>
      <>
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={`extra-${todo.id}`}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{todo.details}</label>
                  <button className="destroy"></button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </>
    </div>
  )
}
