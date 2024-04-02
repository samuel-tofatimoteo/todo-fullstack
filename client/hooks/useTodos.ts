import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  addTodos,
  delAllCompleted,
  delTodos,
  getTodos,
  markAllCompleted,
  markTodos,
  updateTodos,
} from '../apis/todos'
import { Mark, Task, TaskId } from '../../models/todo'

// query to api to get all todos
export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })
}

// query to api to add a todo
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
    mutationFn: (data: TaskId) => updateTodos(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

// query to api to mark todos
export function useMarkTodos() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: Mark) => markTodos(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

// query to api to mark all todos as completed
export function useMarkAllCompleted() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (check:boolean) => markAllCompleted(check),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}

export function useDelAllCompleted() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: () => delAllCompleted(),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
}
