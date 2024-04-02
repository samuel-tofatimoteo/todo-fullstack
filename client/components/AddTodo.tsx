import { Todos } from '../../models/TodosModels'
import { useAddTodo } from './Hooks/useTodo'
import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const addTodo = useAddTodo()

  const [input, setInput] = useState<Todos>({
    task: '',
    completed: false,
    priority: '',
  })

  function handleChange(e) {
    setInput((todos) => ({
      ...todos,
      task: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // console.log('submitted')
    const newTodo = input
    addTodo.mutate(newTodo)
    setInput({ task: '', completed: false, priority: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label>Add Todo:</label> */}
        <input
          aria-label="add todo"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          value={input.task}
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default AddTodo
