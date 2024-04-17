import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Task } from 'vitest'
import { addTodos } from '../apis/apiClient'

export function useAddTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (todo: Task) => addTodos(todo),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

// query to api to delete a todo
export function useDelTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => delTodos(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

// query to api to update a todo value
export function useUpdateTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: Todos) => updateTodos(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}
