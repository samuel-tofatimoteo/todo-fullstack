import AddTodo from './AddTodo.tsx'
import { ListTasks } from './ListTasks.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>To Do List</h1>
        <ListTasks />
        <AddTodo />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
