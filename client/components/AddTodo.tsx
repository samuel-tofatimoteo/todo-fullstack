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
    let {name, value} = e.target
    if(typeof value == "string"){
      value = value.toLowerCase()
    }
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
        <input id="name" name="name" required={true} value={newForm.name} onChange={handleInputChange}
        placeholder="Enter new task ..."/>
        <label htmlFor="details">Details (optional)</label>
        <textarea rows={3} maxLength={70} id="details" name="details" value={newForm.details} onChange={handleInputChange}
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


export default AddTodo
