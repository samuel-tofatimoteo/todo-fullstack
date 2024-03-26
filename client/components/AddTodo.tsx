import { ChangeEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
// eslint-disable-next-line no-unused-vars

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
        />
      </form>
    </>
  )
}
