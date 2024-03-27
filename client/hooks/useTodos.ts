import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { addTodos, delTodos, getTodos, updateTodos } from '../apis/todos'
import { Todos, SendData } from '../../models/model'

export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })
}

export function useAddTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (todo: Todos) => addTodos(todo),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

export function useDelTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => delTodos(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

export function useUpdateTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (sendData: SendData) => updateTodos(sendData),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}
