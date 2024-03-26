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
  const [submittedTask, setSubmittedTask] = useState('')
  const [newForm, setNewForm] = useState({ 
    name: '', 
    details: '', 
    priority: 1, 
    completed: false }
  )

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
    setNewPriority(0)
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
      {/* <p>Submitted Task: {submittedTask}</p> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task Name</label>
        <input id="task" value={newTask} onChange={handleChangeTask}
        placeholder="Enter new task ..."/>
        <label htmlFor="details">Details</label>
        <input id="task" value={newDetails} onChange={handleChangeDetails}
        placeholder="More about task here ..."/>
        <label htmlFor="priority">Priority</label>
        <input id="priority" value={newPriority} onChange={handleChangePriority}/>
      <button type="submit">Submit</button>
      </form>
      
    </>
  )
}

export default AddTodo
