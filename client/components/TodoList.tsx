import { useQuery, useMutation } from '@tanstack/react-query'
import { TodoId, Todos } from '../../models/todos'
import * as api from '../apis/apiClient.ts'
import useTodos from './hooks/useTodos.tsx'
import useDeleteTodos from './hooks/useDeleteTodos.tsx'

function TodoList() {
  // const todos: Todos[] = [
  //   { id: 1, todo: 'Wash the dog', completed: false, priority: 'high' },
  //   { id: 2, todo: 'Do the weekly shop', completed: true, priority: 'medium' },
  //   { id: 3, todo: 'Climb a tree', completed: false, priority: 'high' },
  // ]

  const { isPending, isError, data, error } = useTodos()
  const deleteTodos = useDeleteTodos()
  // console.log(useTodos())

  // const { isPending, isError, data, error } = useQuery({
  //   queryKey: ['todos'],
  //   queryFn: getTodos,
  // })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  function handleClick(id: number) {
    if (deleteTodos.isPending) {
      return 'no'
    }
    deleteTodos.mutate({ id })
  }

  if (data) {
    return (
      <>
        {data.map((todo: TodoId) => {
          return (
            <div key={todo.id} className="todo-list">
              <p>{todo.todo}</p>
              <p>
                <strong>PRIORITY:</strong> {todo.priority}
              </p>

              <label>
                Completed: <input type="checkbox" name="completed" />
              </label>
              <button
                disabled={deleteTodos.isPending}
                key={todo.id}
                onClick={() => handleClick(todo.id)}
              >
                delete
              </button>
            </div>
          )
        })}
      </>
    )
  }
}

export default TodoList
