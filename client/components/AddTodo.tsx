import { ChangeEvent, useState } from 'react'
// eslint-disable-next-line no-unused-vars

function AddTodo() {
  const [newToDo, setNewToDo] = useState('')
  const [submittedToDo, setSubmittedToDo] = useState('')

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmittedToDo(newToDo)
    e.preventDefault()
    setNewToDo('')
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value)
  }

  return (
    <>
      <p>New Todo:{newToDo}</p>
      <p>Submitted Todo:{submittedToDo}</p>
      <form onSubmit={handleOnSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={newToDo}
          onChange={handleOnChange}
        />

        <button>Submit</button>
      </form>
    </>
  )
}

export default AddTodo
