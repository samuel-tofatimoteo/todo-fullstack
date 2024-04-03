import { useState } from 'react'
import { useAddTodo } from '../hooks/useTodos'
import { Todo } from '../../models/Todo'

function AddTodo() {
  const addTodo = useAddTodo()

  const initialState: Todo = { task: '', complete: false }
  const [newTask, setNewTask] = useState(initialState)

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask((todos) => ({ ...todos, task: e.target.value }))
  }

  const handelSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const task = newTask
    addTodo.mutate(task)
    setNewTask(initialState)
  }

  return (
    <form className="form" onSubmit={handelSubmit}>
      <label>
        Enter your task:
        <input
          aria-label="add todo"
          placeholder="task..."
          value={newTask.task}
          onChange={handelChange}
          type="text"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddTodo
