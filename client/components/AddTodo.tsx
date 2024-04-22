import { useState } from "react"
import { useAddTodo } from "../hooks/useTodos"


function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const addTodoMutation = useAddTodo()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (newTodo.length === 0) return; // Make sure user cant submit an empty todo
    const todo = {name: newTodo}
    addTodoMutation.mutate(todo)
    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="What needs to be done?"
      value={newTodo}
      onChange={handleChange}
       />
       <button type="submit">Submit</button>
    </form>
  )
}

export default AddTodo
