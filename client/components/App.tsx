import AddTodo from './AddTodo.tsx'
import  {ListTasks}  from './ListTasks.tsx'
import { useState } from 'react'
import { ShowCompleted } from './ShowCompleted'

function App() {
  const [display, setDisplay] = useState('hide')
  const [completeList, setCompleteList] = useState('Show Incomplete')
  
  function handleClick(e){
    const {value} = e.target
    setDisplay(value)
  }
  function handleClick2(e){
    const {value} = e.target
    setCompleteList(value)
  }
  return (
    <>
      <header className="header">
      {completeList =='Show Incomplete' && <><h1>To Do List</h1><button className="list-type" value='Show Complete' onClick={handleClick2}>Show Completed</button></>}
      {completeList =='Show Complete' && <><h1>Completed</h1><button  className="list-type" value='Show Incomplete' onClick={handleClick2}>Tasks To Do</button></>}
      </header>
      <section className="main">
        {completeList =='Show Incomplete' && <ListTasks/>}
        {completeList =='Show Complete' && <ShowCompleted />}
        {display =='hide' &&  <div><button className='add-button' value='adding' onClick={handleClick}>Add Task</button></div>}
        {display =='adding' && <><AddTodo /><button className='hide-button' value='hide' onClick={handleClick}>Hide</button></>}
      </section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
