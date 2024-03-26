import { useQuery } from '@tanstack/react-query'
import * as api from '../../apis/apiClient'
// import { Todos } from '../../../models/todos'

// const {getTodos} = api
function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => api.getTodos(),
  })
}
export default useTodos
