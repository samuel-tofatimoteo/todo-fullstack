// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import useAddTodo from './hooks/useAddTodo'
import { useMutation, useQueryClient } from '@tanstack/react-query'

function AddTodo() {
  const [newToDo, setNewToDo] = useState({
    todo: '',
    priority: '',
  })

  const addTodo = useAddTodo()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const val = e.target.value
    setNewToDo({
      ...newToDo,
      [name]: val,
    })
  }

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo.mutate(newToDo)
    setNewToDo({
      todo: '',
      priority: '',
    })
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
      <label>
        Todo:
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          name="todo"
          value={newToDo.todo}
          // autoFocus={true}
          onChange={handleChange}
        />
        </label>
        <label>
          Priority:
        <input
          className="new-todo"
          placeholder="Priority"
          name="priority"
          value={newToDo.priority}
          // autoFocus={true}
          onChange={handleChange}
        />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddTodo
