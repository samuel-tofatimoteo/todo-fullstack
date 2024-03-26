import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { useMutation } from '@tanstack/react-query'

export default function TodoList() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => api.fetchTodos(),
  })

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (id) => api.deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  })

  const handleDelete = (id: string) => {
    mutation.mutate(id)
  }

  // const queryClient = useQueryClient()
  // const mutation = useMutation({
  //   mutationFn: (newToDo) => api.addTodo(newToDo),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['todos'] })
  //   },
  // })

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
