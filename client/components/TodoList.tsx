import { Link } from 'react-router-dom'
import { useTasks } from '../hooks/api'
// import LoadingIndicator from './LoadingIndicator.tsx'

export default function TodoList() {
  const { isLoading, isError, data: tasks } = useTasks()

  if (isLoading) {
    return <>loading...</>
  }

  if (isError) {
    return <>Oops</>
  }

  return (
    <>
      <h2>tasks:</h2>
      <form onSubmit={handleSubmit}>
        <ul className="todo-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <div className="view">
                {/* <input className="toggle" type="checkbox" /> {task.completed} */}
                <span>{task.task_detail}</span>
                <button className="destroy">Delete</button>
              </div>
              {/* <input className="edit" value={task.task_detail} /> */}
            </li>
          ))}
        </ul>
      </form>
    </>
  )
}
