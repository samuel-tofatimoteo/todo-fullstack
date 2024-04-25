import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Todo, TodoData } from '../../models/todo.ts'
import EditTodoForm from './EditTodoForm'

import {
  useTasks,
  useCreateTask,
  useDeleteTask,
  useTaskData,
  useEditTask,
} from '../hooks/api.ts'

export default function EditTodo() {
  const params = useParams()
  const id = Number(params.id)
  const task = useTaskData(id)
  const editTask = useEditTask(id)
  const deleteTask = useDeleteTask(id)
  const navigate = useNavigate()

  //console.log('task -> ', task.data.id)

  const handleSubmit = useCallback(
    async (formData: TodoData) => {
      editTask.mutateAsync({ id, ...formData })
    },
    ['tasks'],
  )

  const handleDelete = useCallback(async () => {
    deleteTask.mutate()
    navigate(`/`)
  }, [])

  if (task.isLoading) {
    return <p>....</p>
  }

  if (task.isError || !task.data) {
    return 'Failed to load event data'
  }

  return (
    <>
      <h2>
        edit event: <span className="data">{task.data.task_detail}</span>
      </h2>
      <EditTodoForm
        task_detail={task.data.task_detail}
        priority={task.data.priority}
        completed={task.data.completed}
        onSubmit={handleSubmit}
      />
      <form onSubmit={handleDelete} className="form">
        <div />
        <button className="delete">Delete task</button>
      </form>
    </>
  )
}
