import FormAddTodo from './FormAddTodo'
import ToDoList from './ToDoList'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <FormAddTodo />
        <ToDoList />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
