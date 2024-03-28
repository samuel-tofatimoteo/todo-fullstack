import { useAddTodo } from './Hooks/useTodo'
import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const addTodo = useAddTodo()

  const [input, setInput] = useState({task: '', completed: false, priority:''})}

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit() {
    console.log('submitted')
    // console.log(e.target.value)
  }

  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        value={input.task }
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit()
            // console.log(e.target)
          }
        }}
      />
    </>
  )
}

export default AddTodo
