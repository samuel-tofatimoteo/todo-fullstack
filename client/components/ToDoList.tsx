import { Task, TaskId, Complete } from '../models/todo'
import { useTodos, useDelTodos, useCompleteTodos } from '../hooks/useTodos'

function TodoList() {
  const { data, isLoading, isError, error } = useTodos()
  const delTodos = useDelTodos()
  const compTodo = useCompleteTodos()

  function handleComplete(e: React.MouseEvent<HTMLButtonElement>) {
    compTodo.mutate(e.target.id)
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    delTodos.mutate(e.target.id)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  if (data) {
    return (
      <>
        <section className="main">
          <ul className="todo-list">
            {data.map((todo: TaskId) => {
              return (
                <li key={todo.id}>
                  <div className="view">
                    <input
                      onClick={handleComplete}
                      className="toggle"
                      type="checkbox"
                      id={String(todo.id)}
                      defaultChecked={todo.completed}
                    />
                    <label>{todo.task}</label>
                    <button
                      onClick={handleClick}
                      className="destroy"
                      id={String(todo.id)}
                    ></button>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </>
    )
  }
}

export default TodoList
