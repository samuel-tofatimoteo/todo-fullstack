import { TodoForm } from './AddTodo'
import { ToDoList } from './TodoList'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <ToDoList />
        <TodoForm />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
