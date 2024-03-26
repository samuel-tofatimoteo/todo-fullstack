// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { Todos } from '../../models/model'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addTodo } from '../../server/db/db'

function AddTodo() {
  const [todo, setTodo] = useState('')
  const [submit, setSubmit] = useState('')

  const qc = useQueryClient()
  const mutation = useMutation({
    mutationFn: (todo) => addTodo(todo),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(submit)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
        />
        <input type="number" name="priority" id="priority"></input>
      </form>
    </>
  )
}

export default AddTodo
