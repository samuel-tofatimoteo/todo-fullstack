import { Todos } from '../../models/todos'
import * as api from '../apis/apiclient'
import { useQuery } from '@tanstack/react-query'

export default function Todo() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => api.fetchTodo(),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const todos = data
  console.log(todos)

  return (
    <>
      {todos.map((task) => (
        <ul key={task.what} className="todo-count">
          <li key={task.what}>
            {task.what} by {task.when}
          </li>
        </ul>
      ))}
    </>
  )
}
