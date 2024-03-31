import * as api from '../apis/apiclient'
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

export default function DeleteTodo({ id }: { id: number }) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (id: number) => api.deleteTodo(id),
    onSuccess: () => {
      console.log(`Todo with ID ${id} deleted successfully`)
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
    onError: (error: Error) => {
      console.error(`Error deleting todo with ID ${id}:`, error)
    },
  })

  const handleDelete = (e: any) => {
    mutation.mutate(id)
    console.log(e.target.id)
  }
  return (
    <button id={String(id)} className="destroy" onClick={handleDelete}></button>
  )
}
