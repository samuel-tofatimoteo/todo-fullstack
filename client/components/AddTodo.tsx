// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import * as api from '../apis/apiclient'

function AddTodo() {
  const [newTask, setNewtask] = useState('')
  const [submittedTask, setSummittedTask] = useState('')

  const mutation = useMutation({ mutationFn: api.addTodo })
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
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={newTask}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </>
  )
}

export default AddTodo
