import { useState } from 'react'
import {useAddTodos} from '../hooks/useTodos'
import { Task } from '../models/todo'

function AddTodo() {
  const [newTodo, setNewTodo] = useState({
    todo: '',
    priority: '',
  })

  const addATodo = useAddTodos()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const val = e.target.value
    setNewTodo({
      ...newTodo,
      [name]: val,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  

    const task: Task = {
      task: newTodo.todo,
      completed: false,
    };
  
    addATodo.mutate(task);
  
    setNewTodo({
      todo: '',
      priority: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="todo">What needs to be done?</label>
      <input
     className="new-todo"
  placeholder="What needs to be done?"
  name="todo"
  id="todo"
  value={newTodo.todo}
  onChange={handleChange}
/>
<button type="submit" id="button">Submit</button>
      </form>
    </>
  )
}

export default AddTodo