// import { useAddTodos } from '../hooks/useTodos'
// import { useState } from 'react'

// export default function FormAddTodo() {
//   const [task, setTask] = useState('')

//   const mutation = useAddTodos()

//   function handleChange(e: any) {
//     setTask(e.target.value)
//   }
//   function handleSubmit() {
//     const todo = { task: task }
//     mutation.mutate(todo)
//     setTask('')
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter a new task
//           <input
//             className="add-todo"
//             placeholder="Add a task here"
//             onChange={handleChange}
//             aria-label={`Add a todo`}
//             name="task_details"
//             id="task_details"
//             value={task}
//           />
//         </label>
//       </form>
//     </>
//   )
// }

// import { useState } from 'react'
// import { useAddTodos } from '../hooks/useTodos'
// import { Todos } from '../models/todo'

// // eslint-disable-next-line no-unused-vars
// function FormAddTodo() {
//   const initialstate: Todos = { task: '' }
//   const [task, setTask] = useState(initialstate)

//   const mutation = useAddTodos()

//   function handleChange(e: any) {
//     setTask(e.target.value)
//   }

//   function handleSubmit() {
//     const todo = task
//     mutation.mutate(todo)
//     setTask(initialstate)
//   }
//   return (
//     <>
//       <input
//         className="new-todo"
//         placeholder="What needs to be done?"
//         onChange={handleChange}
//         onKeyDown={(e) => {
//           if (e.key === 'Enter') {
//             handleSubmit()
//           }
//         }}
//         aria-label={`Add a todo`}
//         name="task_details"
//         id="task_details"
//         value={task.task}
//       />
//     </>
//   )
// }

// export default FormAddTodo

import { useState } from 'react'
import { useAddTodos } from '../hooks/useTodos'
import { Todos } from '../models/todo'

function FormAddTodo() {
  const addTodo = useAddTodos()

  const initialState: Todos = { task: '' }
  const [newTask, setNewTask] = useState(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ task: e.target.value })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    addTodo.mutate(newTask)
    setNewTask(initialState)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Enter your task:
        <input
          aria-label="add task"
          placeholder="task..."
          value={newTask.task}
          onChange={handleChange}
          type="text"
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}

export default FormAddTodo
