import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../../apis/todoApi'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteTodo, addNewTodo, updateTodos } from '../../apis/todoApi'
import { TodoIntrfc } from '../../../models/model'

export function useGetTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })
}

export function useDeleteTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })
}

export function useAddNewTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newTodo: TodoIntrfc) => addNewTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })
}

export function useUpdateTodos() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: { id: number; update: TodoIntrfc }) =>
    updateTodos(data.id, data.update),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })
}