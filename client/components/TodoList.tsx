import { useQuery } from '@tanstack/react-query'
import { Todo } from '../../models/Todo'
import * as api from '../apis/todo'

export default function TodoList() {
  const {
    isPending,
    isError,
    data: todos,
    error,
  } = useQuery({ queryKey: ['todos'], queryFn: () => api.getTodos() })
  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
    <>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li key={todo.id}>Task: {todo.task}</li>
            <li>
              <input type="checkbox" name="complete">
                {todo.complete}
              </input>
              <button>Update</button>
              <button>Delete</button>
            </li>
          </ul>
        )
      })}
    </>
  )
}
