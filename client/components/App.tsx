import AddTodo from './AddTodo.tsx'
import Todo from './Todo.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>

        <AddTodo />
        <Todo />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
