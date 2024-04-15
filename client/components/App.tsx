import AddTodo from './AddTask.tsx'
import TaskList from './TaskList.tsx'


function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        {/* <AddTodo /> */}
      </header>
      <section className="main">
        <TaskList/>
      </section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
