import { useQuery } from '@tanstack/react-query'
import * as api from '../../apis/apiClient'

function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => api.getTodos(),
  })
}

export default useTodos
