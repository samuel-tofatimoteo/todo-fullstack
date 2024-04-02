import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteTodo, addTodo } from '../../apis/todoApiClient'
import { Todos } from '../../../models/TodosModels'
import { updateTodo } from '../../../server/db/db'

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

export function useAddTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newTodo: Todos) => addTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })
}

export function useUpdateTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data:{id:number, update:Todos}) => updateTodo(data.id, data.update),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })
}