import { Link } from 'react-router-dom'
import { useTasks } from '../hooks/api'
import { TodoData } from '../../models/todo'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

// import LoadingIndicator from './LoadingIndicator.tsx'

export default function TodoList() {
  const { isLoading, isError, data: tasks } = useTasks()

  const queryClient = useQueryClient()

  // mutation

  const addTaskMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await request.del(`/api/v1/todos/`).send({ id })

      return res.body
    },
    onSuccess: (data) => {
      const tasks = queryClient.getQueryData(['tasks']) as TodoData[]
      console.log('tasks query todolist=> ', tasks)
      queryClient.setQueryData(['tasks'], [...tasks, data])
    },
  })

  // end mutation

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // const taskData = {
    //   task_detail: form.task.id,
    // }

    //addTaskMutation.mutate(form)
    // /setForm(initialState)
  }

  if (isLoading) {
    return <>loading...</>
  }

  if (isError) {
    return <>Oops</>
  }

  return (
    <>
      <h2>Tasks List:</h2>
      <form onSubmit={handleSubmit}>
        <ul className="todo-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <div className="view">
                <span>id: {task.id} --</span>
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
