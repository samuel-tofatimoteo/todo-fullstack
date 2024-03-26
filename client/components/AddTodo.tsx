import { SetStateAction, useState } from 'react'

export function TodoForm() {
  const [newTodo, setTodo] = useState('')
  const [submittedTodo, setsubmittedtodo] = useState('')

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    setsubmittedtodo(newTodo)
    e.preventDefault()
    setTodo('')
  }

  return (
    <>
      <p>New todo: {newTodo}</p>
      <p>Submitted todo: {submittedTodo}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} value={newTodo} id="name"></input>
        <button>Submit</button>
      </form>
    </>
  )
}
