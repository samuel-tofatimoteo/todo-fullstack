import { useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Task } from '../../models/Task'
import { useAddTask } from '../hooks/useTasks'
import e from 'express'

function AddTask() {
  const [taskName, setTaskName] = useState('')
  const addTask = useAddTask()

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    addTask.mutate({})
    setTaskName('')
  }
}

export default AddTodo
