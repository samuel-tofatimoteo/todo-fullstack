import { useQuery } from '@tanstack/react-query'
import { Todos } from '../../models/todos'
import getTodos from '../apis/apiClient.ts'
import useTodos from './hooks/useTodos.tsx'

function TodoList() {
  // const todos: Todos[] = [
  //   { id: 1, todo: 'Wash the dog', completed: false, priority: 'high' },
  //   { id: 2, todo: 'Do the weekly shop', completed: true, priority: 'medium' },
  //   { id: 3, todo: 'Climb a tree', completed: false, priority: 'high' },
  // ]

  const { isPending, isError, data, error } = useTodos()
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
  return (
    <>
      {data.map((todo: Todos) => {
        return (
          <div key={todo.id} className="todo-list">
            <p>{todo.todo}</p>
            <p>
              <strong>PRIORITY:</strong> {todo.priority}
            </p>

            <label>
              Completed: <input type="checkbox" name="completed" />
            </label>
          </div>
        )
      })}
    </>
  )
}

export default TodoList
