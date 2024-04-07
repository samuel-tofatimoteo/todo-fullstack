import { useQuery } from '@tanstack/react-query'
import { Todo, TodoID } from '../../models/Todo'
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
    const id = Number(e.target.id)
    rmvTodo.mutate(id)
  }
  function handleComplete(e) {
    doneTodo.mutate(e.target.id)
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
          {todos.map((todo: TodoID) => {
            return (
              <li key={todo.id}>
                <span className="task">{todo.task}</span>
                <button onClick={handleComplete} id={String(todo.id)}>
                  Complete: {todo.complete ? '✅ ' : '❌ '}
                </button>
                <button
                  onClick={handleDelete}
                  className="delete"
                  id={String(todo.id)}
                >
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
