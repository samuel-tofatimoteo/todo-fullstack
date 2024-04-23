import { Todo } from '../../models/models'
import { useTodos, useUpdateTodo } from '../hooks/useTodos'

function AllTodos() {
  const { data: todos, isLoading, isError, error } = useTodos()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <div className="view">
      <ul className="todo-list">
        {todos.map((todo: Todo) => {
          return (
            <li key={todo.id} className="new-todo">
              {todo.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AllTodos
