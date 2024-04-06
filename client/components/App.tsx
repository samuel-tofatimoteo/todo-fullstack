import AddTodo from './AddTodo.tsx'
import TodoList from './TodoList.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
      </header>
      <section className="main"></section>
        <TodoList />
        <AddTodo />
    </>
  )
}

export default App
