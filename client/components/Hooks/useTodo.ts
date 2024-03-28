import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteTodo, addTodo } from '../../apis/todoApiClient'
import { Todos, TodosId } from '../../../models/TodosModels'

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
