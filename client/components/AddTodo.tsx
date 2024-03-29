import React, { ChangeEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient'

export default function AddTodo() {
  const [newToDo, setNewToDo] = useState('')

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (newToDo) => api.addTodo(newToDo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value)
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newToDo.trim() === '') return // Prevent submission if input is empty
    mutation.mutate({ details: newToDo })
    setNewToDo('')
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={newToDo}
          onChange={handleOnChange}
          aria-label="Add new todo"
        />
        <button type="submit" style={{ display: 'none' }} aria-hidden="true">
          Submit
        </button>
      </form>
    </>
  )
}
