import {
  addTodos,
  removeTodos,
  getTodos,
  updateTodos,
  completeTodos,
} from '../apis/todos'
import { Task, TaskId } from '../models/todo'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })
}

function useAddTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (todo: Task) => addTodos(todo),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

function useRemoveTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => removeTodos(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

function useUpdateTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: TaskId) => updateTodos(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

function CompleteTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => completeTodos(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

export { useTodos, useAddTodos, useRemoveTodos, useUpdateTodos, CompleteTodos }
