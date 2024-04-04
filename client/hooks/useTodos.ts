import {
  addTodos,
  delTodos,
  getTodos,
  completeTodos,
  updateTodos,
} from '../apis/todos'
import { Task, TaskId, Complete } from '../models/todo'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })
}

export function useAddTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (todo: Task) => addTodos(todo),
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
    mutationFn: (data: TaskId) => updateTodos(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

export function useCompleteTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => completeTodos(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}
