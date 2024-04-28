import AddTodo from './AddTodo.tsx'
import TodoList from './TodoList.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>Todos</h1>
        <AddTodo />
        <TodoList />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
