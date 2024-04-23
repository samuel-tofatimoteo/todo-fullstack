import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addTodo, delTodo, getTodos, updateTodo } from '../apis/todos'
import { NewTodo, Todo } from '../../models/models'

// Get all todos
export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })
}

// Add a todo
export function useAddTodo() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: (newTodo: NewTodo) => addTodo(newTodo),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

// Update a todo
export function useUpdateTodo() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (todoUpdate: Todo) => updateTodo(todoUpdate),
    onSuccess: () => client.invalidateQueries({ queryKey: ['todos'] }),
  })
}

// Del a todo
export function useDelTodo() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (todoId: number) => delTodo(todoId),
    onSuccess: () => client.invalidateQueries({ queryKey: ['todos'] }),
  })
}
