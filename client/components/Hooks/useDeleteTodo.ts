import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteTodo } from '../../apis/todoApiClient'

function useDeleteTodo() {
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

export default useDeleteTodo
