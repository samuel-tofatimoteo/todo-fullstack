import * as api from '../apis/apiclient'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import DeleteButton from './DeleteButton'

export default function Todo() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => api.fetchTodo(),
  })
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const todos = data
  //TODO: separate list items to mark completed separately
  return (
    <>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          aria-label="todo list"
        />
        {todos.map((task) => (
          <ul key={task.what} className="todo-list">
            <li key={task.what} className={isChecked ? 'completed' : ''}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={isChecked}
                  aria-label="todo thing"
                />
                <label>{task.what}</label>

                <DeleteButton id={task.id} />
              </div>
              <input
                className="edit"
                value="Create a TodoMVC template"
                aria-label="todo thing"
              />
            </li>
          </ul>
        ))}
      </section>
    </>
  )
}
