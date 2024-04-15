import { useTasks } from "../hooks/useTasks";
import { Task } from "../../models/Task";

function TaskList() {

  const { data: tasks, isLoading, isError, error } = useTasks()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <div className="view">
      <ul className="todo-list">
        {tasks.map((task: Task) => {
          return (
            <li key={task.id}>
              {task.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TaskList