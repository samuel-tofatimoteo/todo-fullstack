import { useState } from 'react'
import { useAddTodos } from '../hooks/useTodos'
import { Todos } from '../models/todo'

function FormAddTodo() {
  const addTodo = useAddTodos()

  const initialState: Todos = { task: '' }
  const [newTask, setNewTask] = useState(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ task: e.target.value })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    addTodo.mutate(newTask)
    setNewTask(initialState)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Enter your task:
        <input
          aria-label="add task"
          placeholder="task..."
          value={newTask.task}
          onChange={handleChange}
          type="text"
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}

export default FormAddTodo
