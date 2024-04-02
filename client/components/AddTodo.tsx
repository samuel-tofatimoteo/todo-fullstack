import { useState } from 'react'
import { Mutation, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/todo'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const [newTask, setNewTask] = useState('')
  const [submittedTask, setSubmittedTask] = useState('')

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (newTask) => api.addTodo(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handelSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    mutation.mutate({ task: newTask })
    setSubmittedTask(newTask)
    setNewTask('')
  }

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="task">
        Enter your task:
        <input value={newTask} onChange={handelChange} type="text" id="task" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddTodo
