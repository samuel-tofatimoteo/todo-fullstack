import AddTodo from './AddTodo.tsx'
import { ListTasks } from './ListTasks.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>TO DO LIST!</h1>
        <ListTasks />
        <AddTodo />
      </header>
      <section className="main"></section>
    </>
  )
}

export default App
