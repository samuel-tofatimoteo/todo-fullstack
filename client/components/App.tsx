import AddTodo from './AddTodo.tsx'
import Todo from './Todo.tsx'
import Footer from './Footer.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>

        <AddTodo />
        <Todo />
      </header>
      <section className="main"></section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
