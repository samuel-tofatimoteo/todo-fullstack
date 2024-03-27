// eslint-disable-next-line no-unused-vars
import { SetStateAction, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import * as api from '../apis/apiClient'

function AddTodo() {
  const [newTask, setNewtask] = useState('')
  const [submittedTask, setSummittedTask] = useState('')
  //onSuccess - refresh auto
  const mutation = useMutation({
    mutationFn: api.addTodo,
  })
  const handleChange = async (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setNewtask(e.target.value)
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    console.log(newTask)
    setSummittedTask(newTask)
    e.preventDefault()
    mutation.mutate({
      // what: newTask,
      // when: '2pm',
      taskDetails: '',
      priority: 0,
      completed: false,
      newTodo: '',
    })
    setSummittedTask('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={newTask}
          className="new-todo"
          placeholder="What needs to be done?"
        />
        <button>Submit</button>
      </form>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={newTask}
          className="new-todo"
          placeholder="by what time?"
        />
        <button>Submit</button>
      </form>
      <p>Submitted Task: {submittedTask}</p>
    </>
  )
}

export default AddTodo
