import { Todo } from '../../models/models'
import { useDelTodo, useTodos } from '../hooks/useTodos'

function AllTodos() {
  const { data: todos, isLoading, isError, error } = useTodos()
  const deleteTodoMutation = useDelTodo()

  const handleDeleteClick = (id: number) => {
    deleteTodoMutation.mutate(id)
  }

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
              <span>{todo.name}</span>
              <button
                name="delete button"
                className="destroy"
                onClick={() => handleDeleteClick(todo.id)}
              >
                del
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AllTodos
