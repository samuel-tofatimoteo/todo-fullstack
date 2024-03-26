// eslint-disable-next-line no-unused-vars
import { useState } from "react"
import { useMutation, QueryClient, useQueryClient } from "@tanstack/react-query"
import * as api from '../apis/apiClient'
import { Task } from "../../Models/Task"

function AddTodo() {
  const queryClient = useQueryClient()
  const initialState :Task = { 
    name: '', 
    details: '', 
    priority: 1, 
    completed: false }
  const [newForm, setNewForm] = useState(initialState)

  function handleInputChange(e){
    const {name, value} = e.target
    setNewForm({...newForm, [name]: value})
  }

  function handleSubmit(e){
    e.preventDefault()
    taskAdd.mutate(newForm)
    setNewForm(initialState)
  }

  const taskAdd = useMutation({
    mutationFn: (change : Task) => api.addTask(change),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Task Name</label>
        <input id="name" name="name" value={newForm.name} onChange={handleInputChange}
        placeholder="Enter new task ..."/>
        <label htmlFor="details">Details</label>
        <input id="details" name="details" value={newForm.details} onChange={handleInputChange}
        placeholder="More about task here ..."/>
        <label htmlFor="priority">
        Priority Level:
        <select id="priority" name="priority" onChange={handleInputChange}>
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

// function AddTodo() {

//   // REFACTOR FORM
//   const [newTask, setNewTask] = useState('')
//   const [newDetails, setnewDetails] = useState('')
//   const [newPriority, setNewPriority] = useState(0)

//   function handleChangeTask(e){
//     setNewTask(e.target.value)
//   }

//   function handleChangeDetails(e){
//     setnewDetails(e.target.value)
//   }

//   function handleChangePriority(e){
//     setNewPriority(e.target.value)
//   }

//   function handleSubmit(e){
//     e.preventDefault()
//     taskAdd.mutate({ 
//       name: newTask, 
//       details: newDetails, 
//       priority: newPriority, 
//       completed: false })
//     setNewTask('')
//     setnewDetails('')
//     setNewPriority(1)
//   }

//   const queryClient = useQueryClient()

//   const taskAdd = useMutation({
//     mutationFn: (change : Task) => api.addTask(change),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['tasks'] })
//     },
//   })

//   return (
//     <>
//       <p>New Form: {newTask} - {newDetails} - {newPriority}</p>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="task">Task Name</label>
//         <input id="task" name="task" value={newTask} onChange={handleChangeTask}
//         placeholder="Enter new task ..."/>
//         <label htmlFor="details">Details</label>
//         <input id="details" name="details" value={newDetails} onChange={handleChangeDetails}
//         placeholder="More about task here ..."/>
//         <label htmlFor="priority">
//         Priority Level:
//         <select id="priority" name="priority" onChange={handleChangePriority}>
//         <option value={1}>1</option>
//         <option value={2}>2</option>
//         <option value={3}>3</option>
//         </select>
//         </label>
//       <button type="submit">Submit</button>
//       </form>
//     </>
//   )
// }


export default AddTodo
