import AddTodo from './AddTodo.tsx'
import FooterButtons from './FooterButtons.tsx'
import TodoList from './TodoList.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
        <TodoList />
      </header>
      <section className="main"></section>
      <footer className="footer">
        <FooterButtons />
      </footer>
    </>
  )
}

export default App
