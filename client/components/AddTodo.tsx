import { Todos } from '../../models/TodosModels'
import { useAddTodo } from './Hooks/useTodo'
import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const addTodo = useAddTodo()
  const [input, setInput] = useState({task: '', completed: false, priority:''})


  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    console.log('submitted')
    addTodo.mutate(e.target.value)
   
  }

  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        value={input.task}
        onChange={handleChange}
      />

    </>
  )
}

export default AddTodo


