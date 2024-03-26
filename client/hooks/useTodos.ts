import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getTodos } from '../apis/todos'

export function useTodos() {
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })
  return { ...query }
}
