import { toDo } from '../../models/toDo'
import * as api from '../apis/apiClient'
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
          <li {...task}>{task.taskDetails}</li>
        </ul>
      ))}
    </>
  )
}
