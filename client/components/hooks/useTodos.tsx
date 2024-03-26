import { useQuery } from '@tanstack/react-query'
import getTodos from '../../apis/apiClient'
import { Todos } from '../../../models/todos'

function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })
}
export default useTodos
