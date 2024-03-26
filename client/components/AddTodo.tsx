// eslint-disable-next-line no-unused-vars
import { useState } from "react"

function AddTodo() {

  const [newTask, setNewTask] = useState('')
  const [submittedTask, setSubmittedTask] = useState('')

  function handleChange(e){
    setNewTask(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setSubmittedTask(newTask)
    setNewTask('')
  }

  return (
    <>
      <p>New Task: {newTask}</p>
      <p>Submitted Task: {submittedTask}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task Name</label>
        <input id="task" value={newTask} onChange={handleChange}
        placeholder="Enter new task ..."/>
      <button type="submit">Submit</button>
      </form>
      
    </>
  )
}

export default AddTodo
