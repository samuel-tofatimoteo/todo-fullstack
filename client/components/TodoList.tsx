import { useQuery, useMutation } from '@tanstack/react-query'
import { TodoId, Todos } from '../../models/todos'
import * as api from '../apis/apiClient.ts'
import useTodos from './hooks/useTodos.tsx'
import useDeleteTodos from './hooks/useDeleteTodos.tsx'

function TodoList() {
  const { isPending, isError, data, error } = useTodos()
  const deleteTodos = useDeleteTodos()

  if (isPending) {
    return <span>Loading ...</span>
  }
  if (isError) {
    return <span>Error: The data is not available</span>
  }

  function handleClick(id: number) {
    if (deleteTodos.isPending) {
      return
    }
    deleteTodos.mutate({ id })
  }

  if (data) {
    return (
      <>
        {data.map((todo) => {
          return (
            <div key={todo.id}>
              <p id="todo">{todo.todo}</p>
              <p>
                <strong>Priority:</strong> {todo.priority}
              </p>
              <fieldset>
                <legend> Click the box when todo is complete</legend>
                <label>
                  Completed: <input type="checkbox" name="completed" />
                </label>
              </fieldset>
              <button
                key={todo.id}
                onClick={() => handleClick(todo.id)}
                id="button"
              >
                Delete
              </button>
            </div>
          )
        })}
      </>
    )
  }
}

export default TodoList
