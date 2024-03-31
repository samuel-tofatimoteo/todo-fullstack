// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiclient'

function AddTodo() {
  const [newTask, setNewtask] = useState('')
  const [submittedTask, setSummittedTask] = useState('')
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: api.addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
  const handleChange = (e) => {
    setNewtask(e.target.value)
  }
  const handleSubmit = (e) => {
    setSummittedTask(newTask)
    e.preventDefault()
    mutation.mutate({
      what: newTask,
      when: '2pm',
      done: false,
    })

    setNewtask('')
  }
  return (
    <>
      <form onSubmit={handleSubmit} aria-label="Add to do">
        <input
          onChange={handleChange}
          value={newTask}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          aria-label="Add to do"
        />
      </form>
    </>
  )
}

export default AddTodo
