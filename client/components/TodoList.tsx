import {
  FocusEvent,
  FormEvent,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  SetStateAction,
  useState,
} from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { useMutation } from '@tanstack/react-query'

export default function TodoList() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => api.fetchTodos(),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const todos = data
  console.log(todos)

  function handleToggle(
    id: Key | null | undefined,
    completed: boolean | undefined,
  ): void {
    mutate({ id, completed })
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function mutate(_todo: {
    id: Key | null | undefined
    completed: boolean | undefined
  }) {
    throw new Error('Function not implemented.')
  }

  const handleDelete = (id) => {
    mutationDelete.mutate(id)
  }

  return (
    <>
      {todos.map(
        (todo: {
          completed: boolean | undefined
          id: Key | null | undefined
          taskDetails:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined
        }) => (
          <div key={todo.id}>
            <ul className="todo-count">
              <li>{todo.taskDetails}</li>
            </ul>
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id, todo.completed)}
            />
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ),
      )}
    </>
  )
}

// export default function TodoList() {
//   const { isPending, isError, data, error } = useQuery({
//     queryKey: ['todos'],
//     queryFn: () => api.fetchTodos(),
//   })

//   const queryClient = useQueryClient()

//   const mutationDelete = useMutation({
//     mutationFn: (id) => api.deleteTodo(id),
//     onSuccess: () => {
//       queryClient.invalidateQueries('todo')
//     },
//   })

//   const mutationUpdate = useMutation({
//     mutationFn: (updatedTodo) => api.updateTodo(updatedTodo),
//     onSuccess: () => {
//       queryClient.invalidateQueries('todo')
//     },
//   })

//   const handleDelete = (id: any) => {
//     mutationDelete.mutate(id)
//   }

//   const handleDoubleClick = (todo: {
//     id: SetStateAction<null>
//     details: SetStateAction<string>
//   }) => {
//     setEditableTodoId(todo.id)
//     setEditedTodoDetails(todo.details)
//   }

//   const handleEditChange = (e: {
//     target: { value: SetStateAction<string> }
//   }) => {
//     setEditedTodoDetails(e.target.value)
//   }

//   const handleEditSubmit = (
//     e: FormEvent<HTMLFormElement> | FocusEvent<HTMLInputElement, Element>,
//     id: any,
//   ) => {
//     e.preventDefault()
//     mutationUpdate.mutate({ id, taskDetails: editedTodoDetails })
//     setEditableTodoId(null)
//   }

//   const handleToggle = (id: any, completed: any) => {
//     mutationUpdate.mutate({ id, completed: !completed })
//   }

//   const [editableTodoId, setEditableTodoId] = useState(null)
//   const [editedTodoDetails, setEditedTodoDetails] = useState('')

//   if (isPending) {
//     return <span>Loading...</span>
//   }

//   if (isError) {
//     return <span>Error: {error.message}</span>
//   }

//   const todos = data
//   console.log(todos)
//   return (
//     <div>
//       <>
//         <section className="main">
//           <input id="toggle-all" className="toggle-all" type="checkbox" />
//           <label htmlFor="toggle-all">Mark all as complete</label>
//           <ul className="todo-list">
//             {todos.map((todo) => (
//               <li
//                 key={`extra-${todo.id}`}
//                 className={todo.completed ? 'completed' : ''}
//               >
//                 <div className="view">
//                   <input
//                     className="toggle"
//                     type="checkbox"
//                     checked={todo.completed}
//                     onChange={() => handleToggle(todo.id, todo.completed)}
//                   />
//                   {editableTodoId === todo.id ? (
//                     <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
//                       <input
//                         type="text"
//                         value={editedTodoDetails}
//                         onChange={handleEditChange}
//                         onBlur={(e) => handleEditSubmit(e, todo.id)}
//                         // eslint-disable-next-line jsx-a11y/no-autofocus
//                         autoFocus
//                         className="ed"
//                       />
//                     </form>
//                   ) : (
//                     <label
//                       className=""
//                       onDoubleClick={() => handleDoubleClick(todo)}
//                     >
//                       {todo.details}
//                     </label>
//                   )}
//                   <button
//                     className="destroy"
//                     onClick={() => handleDelete(todo.id)}
//                   ></button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </section>
//       </>
//     </div>
//   )
// }
