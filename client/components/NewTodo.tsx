import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import EditTodoForm from '../components/EditTodoForm'
import { Todo } from '../../models/todo'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { useTasks, useCreateTask } from '../hooks/api'

export default function NewTodo() {
  const createTask = useCreateTask()
  const navigate = useNavigate()
  const handleSubmit = useCallback(async (data: Todo) => {
    await createTask.mutateAsync(data)
    navigate(`/`)
  }, [])

  return (
    <>
      <h2>New Event</h2>
      <EditTodoForm
        task_detail=""
        priority={0}
        completed={false}
        onSubmit={handleSubmit}
      />
    </>
  )
}
