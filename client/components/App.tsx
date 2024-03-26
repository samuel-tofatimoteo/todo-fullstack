import { useTodos } from '../hooks/useTodos.ts'
import AddTodo from './AddTodo.tsx'
import { useQuery } from '@tanstack/react-query'

function App() {
  // const [ data, isLoading]
  const { data, isLoading, isError, error } = useTodos()
  console.log(data)

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
          {data.map((todo) => {
            return (
              <div className="todo-container" key={todo.id}>
                <p>{todo.task_details}</p>
                <p className="priority">{todo.priority} </p>
                <p>{todo.completed ? 'completed' : 'not complete'}</p>
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
