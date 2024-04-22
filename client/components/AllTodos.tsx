import { Todo } from "../../models/models";
import { useTodos } from "../hooks/useTodos";

function AllTodos() {

  const { data: tasks, isLoading, isError, error } = useTodos()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <div className="view">
      <ul className="todo-list">
        {tasks.map((todo: Todo) => {
          return (
            <li key={todo.id}>
              {todo.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AllTodos