import { useState } from 'react'
import { useAddTodos } from '../hooks/useTodos'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const [task, setTask] = useState('')

  const mutation = useAddTodos()

  function handleChange(e: any) {
    setTask(e.target.value)
  }

  function handleSubmit() {
    const todo = { task: task }
    mutation.mutate(todo)
    setTask('')
  }
  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit()
          }
        }}
        aria-label={`Add a todo`}
        name="task_details"
        id="task_details"
        value={task}
      />
        
    </>
  )
}

export default AddTodo
