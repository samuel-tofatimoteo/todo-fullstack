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
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.details}</p>
      })}
    </div>
  )
}
