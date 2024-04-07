//custom hooks
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  getTodos,
  getComplete,
  getIncomplete,
  deleteTodo,
  addTodo,
  updateToDoneTodo,
} from '../apis/todo'
import { Todo, TodoID } from '../../models/Todo'

export function useGetTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })
}

export function useAddTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newTodo: Todo) => addTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })
}

export function useDeleteTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

export function useUpdateDoneTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => updateToDoneTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })
}
