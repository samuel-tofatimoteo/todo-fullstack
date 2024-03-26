import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const [task, setTask] = useState('')

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handelSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handelSubmit}>
      <label>
        Enter your task:
        <input value={task} onChange={handelChange} type="text" />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default AddTodo
