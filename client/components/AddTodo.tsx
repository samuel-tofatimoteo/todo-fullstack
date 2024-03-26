// eslint-disable-next-line no-unused-vars
import { useState } from "react"
import { useMutation, QueryClient, useQueryClient } from "@tanstack/react-query"
import * as api from '../apis/apiClient'
import { Task } from "../../Models/Task"

function AddTodo() {

  const [newTask, setNewTask] = useState('')
  const [submittedTask, setSubmittedTask] = useState('')

  function handleChange(e){
    setNewTask(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    taskAdd.mutate({ name: newTask, details: 'test', priority: 1, completed: false })
    setSubmittedTask(newTask)
    setNewTask('')
  }

  const queryClient = useQueryClient()

  const taskAdd = useMutation({
    mutationFn: (change : Task) => api.addTask(change),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
  

  return (
    <>
      <p>New Task: {newTask}</p>
      <p>Submitted Task: {submittedTask}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task Name</label>
        <input id="task" value={newTask} onChange={handleChange}
        placeholder="Enter new task ..."/>
      <button type="submit">Submit</button>
      </form>
      
    </>
  )
}

export default AddTodo
