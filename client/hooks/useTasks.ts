import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { addTask, getTaskById, getTasks } from '../apis/tasks'

export function useTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => getTasks(),
  })
}

export function useTaskById(id: number) {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => getTaskById(id),
  })
}

export function useAddTask() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: addTask(),
  })
}
