import AddTodo from './AddTodo.tsx'
import TodoList from './TodoList.tsx'

function App() {
  return (
    <>
      <header>
        <h1>Todos hahah</h1>
        <AddTodo />
      </header>
      <section>
        {/* <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label> */}
        <TodoList />
      </section>
      <footer></footer>
    </>
  )
}

export default App
