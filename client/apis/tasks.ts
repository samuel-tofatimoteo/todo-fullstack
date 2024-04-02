import request from 'superagent'
import { Task } from '../../models/Task'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

// export async function getTasks() {
//   const res = await request.get('api/v1/tasks')
//   return res.body as Task[]
// }

// export async function getTaskById(id: number) {
//   const res = await request.get(`api/v1/tasks/${id}`)
//   return res.body as Task
// }

// export async function addTask(newTask: Task) {
//   return await request.post('api/v1/tasks').send(newTask)
// }

// export async function delTask(id: number) {
//   return await request.del(`api/v1/tasks/${id}`)
// }

// export async function updateTask(taskUpdate: Task) {
//   const { id, name, details, difficulty, completed } = taskUpdate
//   const res = await request
//     .patch(`api/v1/tasks/${id}`)
//     .send({ name, details, difficulty, completed })
//   return res.body as Task[]
// }

//-----------Decided to make API call functions inside React hooks
//-----------as I make the React hooks

export function useTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await request.get('api/v1/tasks')
      return res.body as Task[]
    },
  })
}

export function useTask(id: number) {
  return useQuery({
    queryKey: ['task', id],
    queryFn: async () => {
      const res = await request.get(`api/v1/tasks/${id}`)
      return res.body
    },
  })
}

export function useAddTask(newTask: Task) {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const res = await request.post('api/v1/tasks').send(newTask)
      return res.body
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}

export function useDelTask(id: number) {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      await request.del(`api/v1/tasks/${id}`)
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}

export function useUpdateTask(taskUpdate: Task) {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const { id, name, details, difficulty, completed } = taskUpdate
      const res = await request
        .patch(`api/v1/tasks/${id}`)
        .send({ name, details, difficulty, completed })
      return res.body as Task[]
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}
