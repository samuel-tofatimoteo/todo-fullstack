// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { Todos } from '../../models/model'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addTodos } from '../apis/todos'
import { useAddTodos } from '../hooks/useTodos'

function AddTodo() {
  const [formData, setFormData] = useState({
    task_details: '',
    priority: null,
    completed: false,
  })

  const mutation = useAddTodos()

  function handleChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formData)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          onChange={handleChange}
          name="task_details"
          id="task_details"
          value={formData.task_details}
        />
        <input
          className="new-todo"
          placeholder="Assign Priority"
          type="number"
          name="priority"
          id="priority"
          onChange={handleChange}
          value={formData.priority}
        ></input>
        <button className="submit-todo btn">submit</button>
      </form>
    </>
  )
}

export default AddTodo
