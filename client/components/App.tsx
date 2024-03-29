import AddTodo from './AddTodo.tsx'
import FooterButtons from './FooterButtons.tsx'
import TodoList from './TodoList.tsx'
import Nav from './Login.tsx'
import Login from './Login.tsx'

function App() {
  return (
    <>
      <Login />
      <h1>todos</h1>
      <AddTodo />
      <TodoList />
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
