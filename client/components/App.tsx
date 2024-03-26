import { Todos } from '../../models/model.ts'
import { useDelTodos, useTodos } from '../hooks/useTodos.ts'
import AddTodo from './AddTodo.tsx'
import { useQuery } from '@tanstack/react-query'

function App() {
  // const [ data, isLoading]
  const { data, isLoading, isError, error } = useTodos()

  const delTodo = useDelTodos()

  function handleDelete(e: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    console.log(delTodo)
    delTodo.mutate(e.target.id)
  }

  if (isLoading) {
    return <p>Loading</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  if (data)
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <div className="todo-content">
          {data.map((todo: Todos) => {
            return (
              <div className="todo-container" key={todo.id}>
                <p>{todo.task_details}</p>
                <p className="priority">{todo.priority} </p>
                <p>{todo.completed ? 'completed' : 'not complete'}</p>
                <button id={String(todo.id)} onClick={handleDelete}>
                  delete
                </button>
              </div>
            )
          })}
        </div>
        <section className="main"></section>
        <footer className="footer"></footer>
      </>
    )
}

export default App
