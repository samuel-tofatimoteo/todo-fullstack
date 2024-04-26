import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoData } from '../../models/todo'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

import { useTasks } from '../hooks/api'

interface Props {
  handleAdd: (form: TodoData) => void
}

function AddTodo() {
  const initialState = {
    task_detail: '',
  }
  const [form, setForm] = useState(initialState)

  const { isLoading, isError, data: tasks } = useTasks()

  const queryClient = useQueryClient()
  const navigate = useNavigate()

  // mutation

  const addTaskMutation = useMutation({
    mutationFn: async (values: { task_detail: string }) => {
      const res = await request.post(`/api/v1/todos`).send(values)

      return res.body
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      navigate(`/`)
    },
  })

  // end mutation
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const val = event.target.value

    setForm({
      ...form,
      [name]: val,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const taskData = {
      task_detail: form,
    }

    addTaskMutation.mutate(form)
    setForm(initialState)
  }

  return (
    <>
      <h2>Add Task: </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="scare">Task:</label>
        <input
          onChange={handleChange}
          type="text"
          name="task_detail"
          id="task_detail"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddTodo
