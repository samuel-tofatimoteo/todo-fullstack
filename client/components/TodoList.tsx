import { Link } from 'react-router-dom'
import { useTasks, useDeleteTask } from '../hooks/api'
import { TodoData } from '../../models/todo'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import request from 'superagent'

export default function TodoList() {
  const { isLoading, isError, data: tasks } = useTasks()

  if (isLoading) {
    return <>...</>
  }

  if (isError) {
    return <>Oops</>
  }

  return (
    <>
      <h2>Tasks</h2>
      <ul className="cards">
        {tasks?.map((task) => (
          <li key={task.id}>
            <div>
              <span>id: {task.id} </span>
              <span>{task.task_detail}</span>
              <Link to={`/todo/${task.id}/edit`}>edit to do</Link>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <Link to={`/todo/add`}>add to do</Link>
      </div>
    </>
  )
}
