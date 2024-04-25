import { Outlet } from 'react-router-dom'
import TodoList from './TodoList.tsx'

// import TodoList from './TodoList.tsx'

function App() {
  return (
    <>
      <header>
        <h1>Todo List</h1>
        <Outlet />
        <TodoList />
      </header>
      <footer></footer>
    </>
  )
}

export default App
