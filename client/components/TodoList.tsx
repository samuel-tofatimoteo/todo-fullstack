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

  const queryClient = useQueryClient()

  const mutationDelete = useMutation({
    mutationFn: (id) => api.deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  })

  const mutationUpdate = useMutation({
    mutationFn: (updatedTodo) => api.updateTodo(updatedTodo),
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  })

  const handleDelete = (id) => {
    mutationDelete.mutate(id)
  }

  const handleDoubleClick = (todo) => {
    setEditableTodoId(todo.id)
    setEditedTodoDetails(todo.details)
  }

  const handleEditChange = (e) => {
    setEditedTodoDetails(e.target.value)
  }

  const handleEditSubmit = (e, id) => {
    e.preventDefault()
    mutationUpdate.mutate({ id, details: editedTodoDetails })
    setEditableTodoId(null)
  }

  const handleToggle = (id, completed) => {
    mutationUpdate.mutate({ id, completed: !completed })
  }

  const [editableTodoId, setEditableTodoId] = useState(null)
  const [editedTodoDetails, setEditedTodoDetails] = useState('')

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const todos = data
  console.log(todos)

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

              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id, todo.completed)}
              />
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </ul>
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
//   // const queryClient = useQueryClient()

//   if (isPending) {
//     return <span>Loading...</span>
//   }

//   if (isError) {
//     return <span>Error: {error.message}</span>
//   }

//   const todos = data
//   console.log(todos)

//   // const handleDelete = (id) => {
//   //   MutationEvent.mutate(id)
//   // }
