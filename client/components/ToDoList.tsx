import { Task, TaskId, Complete } from '../models/todo'
import { useTodos } from '../hooks/useTodos'

function TodoList() {
  const { data, isLoading, isError, error } = useTodos()

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
                    <input className="toggle" type="checkbox" />
                    <label>{todo.task}</label>
                    <button className="destroy"></button>
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
