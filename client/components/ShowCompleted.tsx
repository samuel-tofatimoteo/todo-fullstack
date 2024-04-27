import React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Task, TaskDB } from '../../Models/Task'
import { taskSort } from '../helperFunctions/functionSet'
import * as api from '../apis/apiClient'

export function ShowCompleted() {
  const queryClient = useQueryClient()

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const { value } = e.currentTarget
    taskMarkIncomplete.mutate(value)
  }

  const taskMarkIncomplete = useMutation({
    mutationFn: (change: string) => api.incompleteTask(change),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => api.getCompleteTasks(),
  })

  if (isLoading) {
    return <p>Loading ...</p>
  }

  if (isError) {
    return <p>Error!!</p>
  }

  if (data) {
    data.sort((a: TaskDB, b: TaskDB) => taskSort(a, b))
    return (
      <>
        <ul>
          {data.map((task: TaskDB) => (
            <li key={task.id}>
              <span className="task">{task.name}</span> {task.details}
              <button
                value={task.id}
                aria-label="return task to incomplete list"
                className="reset action-button"
                onClick={handleClick}
              >
                ↻
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }

  return null // Return null if no data is available yet
}
