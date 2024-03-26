// eslint-disable-next-line no-unused-vars
import { useState } from "react"
import { useMutation, QueryClient, useQueryClient } from "@tanstack/react-query"
import * as api from '../apis/apiClient'
import { Task } from "../../Models/Task"

function AddTodo() {

  // REFACTOR FORM
  const [newTask, setNewTask] = useState('')
  const [newDetails, setnewDetails] = useState('')
  const [newPriority, setNewPriority] = useState(0)

  function handleChangeTask(e){
    setNewTask(e.target.value)
  }

  function handleChangeDetails(e){
    setnewDetails(e.target.value)
  }

  function handleChangePriority(e){
    setNewPriority(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    taskAdd.mutate({ 
      name: newTask, 
      details: newDetails, 
      priority: newPriority, 
      completed: false })
    setNewTask('')
    setnewDetails('')
    setNewPriority(1)
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
      <p>New Form: {newTask} - {newDetails} - {newPriority}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task Name</label>
        <input id="task" name="task" value={newTask} onChange={handleChangeTask}
        placeholder="Enter new task ..."/>
        <label htmlFor="details">Details</label>
        <input id="details" name="details" value={newDetails} onChange={handleChangeDetails}
        placeholder="More about task here ..."/>
        <label htmlFor="priorityLevel">
        Priority Level:
        <select id="priorityLevel" name="priorityLevel" onChange={handleChangePriority}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        </select>
        </label>
      <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddTodo
