import React, { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { useMutation } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react' // Import useAuth0

export default function TodoList() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => api.fetchTodos(),
  })

  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0() // Get the access token

  const mutationDelete = useMutation({
    mutationFn: (id, token) => api.deleteTodo(id, token), // Pass token to your API function
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  })

  const mutationUpdate = useMutation({
    mutationFn: (updatedTodo, token) => api.updateTodo(updatedTodo, token), // Pass token to your API function
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  })

  const handleDelete = (id) => {
    mutationDelete.mutate(id)
  }

  const handleDoubleClick = (todo) => {
    setEditableTodoId(todo.id)
    setEditedTodoDetails(todo.details)
  }

  const handleEditChange = (e) => {
    setEditedTodoDetails(e.target.value)
  }

  const handleEditSubmit = (e, id) => {
    e.preventDefault()
    mutationUpdate.mutate({ id, details: editedTodoDetails })
    setEditableTodoId(null)
  }

  const handleToggle = (id, completed) => {
    mutationUpdate.mutate({ id, completed: !completed })
  }

  const [editableTodoId, setEditableTodoId] = useState(null)
  const [editedTodoDetails, setEditedTodoDetails] = useState('')

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
              <li
                key={`extra-${todo.id}`}
                className={todo.completed ? 'completed' : ''}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo.id, todo.completed)}
                  />
                  {editableTodoId === todo.id ? (
                    <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
                      <input
                        type="text"
                        value={editedTodoDetails}
                        onChange={handleEditChange}
                        onBlur={(e) => handleEditSubmit(e, todo.id)}
                        className="ed"
                      />
                    </form>
                  ) : (
                    <label
                      className=""
                      onDoubleClick={() => handleDoubleClick(todo)}
                    >
                      {todo.details}
                    </label>
                  )}
                  <button
                    className="destroy"
                    onClick={() => handleDelete(todo.id)}
                  ></button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </>
    </div>
  )
}
