// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import useAddTodo from './hooks/useAddToDo'

function AddTodo() {
  const [newTodo, setNewTodo] = useState({
    todo: '',
    priority: '',
  })

  const addATodo = useAddTodo()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const val = e.target.value
    setNewTodo({
      ...newTodo,
      [name]: val,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addATodo.mutate(newTodo)
    setNewTodo({
      todo: '',
      priority: '',
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          name="todo"
          value={newTodo.todo}
          onChange={handleChange}
        />
        <input
          className="new-todo"
          placeholder="Priority"
          name="priority"
          value={newTodo.priority}
          onChange={handleChange}
        />
        <button type="submit" id="button">
          Submit
        </button>
      </form>
    </>
  )
}

export default AddTodo
