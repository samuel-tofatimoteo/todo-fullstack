// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import useAddTodo from './hooks/useAddTodo'
import { useMutation, useQueryClient } from '@tanstack/react-query'

function AddTodo() {
  const [newToDo, setNewToDo] = useState('')

  const addTodo = useAddTodo()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value)
  }

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo.mutate({ todo: newToDo })
    setNewToDo('')
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={newToDo}
          // autoFocus={true}
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default AddTodo
