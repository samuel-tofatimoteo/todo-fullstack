import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../../apis/todoApiClient'

function useGetTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })
}

export default useGetTodos
