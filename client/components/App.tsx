import AddTodo from './AddTodo.tsx'
import  {ListTasks}  from './ListTasks.tsx'
import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('hide')
  
  function handleClick(e){
    const {value} = e.target
    setDisplay(value)
  }

  return (
    <>
      <header className="header">
        <h1>To Do List</h1>
      </header>
      <section className="main">
        <ListTasks />
        {display =='hide' &&  <div><button className='task-button' value='adding' onClick={handleClick}>Add Task</button></div>}
        {display =='adding' && <><AddTodo /><button className='hide-button' value='hide' onClick={handleClick}>Hide</button></>}
      </section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
