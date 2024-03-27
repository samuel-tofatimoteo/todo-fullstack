import AddTodo from './AddTodo.tsx'
import { ListTasks } from './ListTasks.tsx'
import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('hide')
  
  function handleClick(e){
    setDisplay('adding')
  }

  return (
    <>
      <header className="header">
        <h1>To Do List</h1>
      </header>
      <section className="main">
        <ListTasks />
        {display =='hide' &&  <button className='task-button' onClick={handleClick}>Add Task</button>}
        {display =='adding' && <AddTodo />}
      </section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
