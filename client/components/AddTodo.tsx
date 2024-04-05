// eslint-disable-next-line no-unused-vars
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SetStateAction, useState } from 'react'
import { addTask } from '../apis/apiClient'

function AddTodo() {
  const [newTask, setNewTask] = useState('')
  const [submittedTask, setSubmittedTask] = useState('')
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (newTask) => addTask(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setNewTask(e.target.value)
  }
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    mutation.mutate({ name: newTask })
    setSubmittedTask(newTask)
    setNewTask('')
  }
  return (
    <>
      <p>New Task: {newTask}</p>
      <p>Submitted Task: {submittedTask}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task Name</label>
        <input
          id="task"
          value={newTask}
          onChange={handleChange}
          placeholder="Enter New Task ..."
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddTodo
