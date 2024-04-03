import { useQuery } from '@tanstack/react-query'
import { Todo } from '../../models/Todo'
import {
  useDeleteTodo,
  useGetTodos,
  useUpdateDoneTodo,
} from '../hooks/useTodos'

export default function TodoList() {
  //acessing hooks
  const { isLoading, isError, data: todos, error } = useGetTodos()
  const rmvTodo = useDeleteTodo()
  const doneTodo = useUpdateDoneTodo()
  //handle function
  function handleDelete(e) {
    rmvTodo.mutate(Number(e.target.id))
  }
  function handleComplete(e) {
    doneTodo.mutate(Number(e.target.id))
  }

  if (isLoading) {
    return <span>Loading...</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }
  if (todos) {
    return (
      <>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span className="task">{todo.task}</span>
              <button onClick={handleComplete}>
                Complete: {todo.complete ? '✅ ' : '❌ '}{' '}
              </button>
              <button onClick={handleDelete} className="delete">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
