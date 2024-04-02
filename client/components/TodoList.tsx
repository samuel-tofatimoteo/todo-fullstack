import { Todos, TodosId } from '../../models/TodosModels'
import { useDeleteTodo } from './Hooks/useTodo'
import useGetTodos from './Hooks/useGetTodo'

function TodoList() {
  const { data, isLoading, isError, error } = useGetTodos()
  const deleteTodo = useDeleteTodo()
  console.log(deleteTodo)

  function handleDelete(e) {
    // console.log(e.target.id)
    deleteTodo.mutate(Number(e.target.id))
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
            {data.map((todo: TodosId) => {
              return (
                <li key={todo.id}>
                  <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>{todo.task}</label>
                    <button
                      onClick={handleDelete}
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
