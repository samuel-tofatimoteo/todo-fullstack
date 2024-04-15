import request from 'superagent'
import { Task } from '../../models/Task'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export async function getTasks() {
  const res = await request.get('api/v1/tasks')
  return res.body
}

export async function addTask(newTask: Task) {
  return await request.post('api/v1/tasks').send(newTask)
}

export async function delTask(id: number) {
  return await request.del(`api/v1/tasks/${id}`)
}

export async function updateTask(taskUpdate: Task) {
  const { id, name, details, difficulty, completed } = taskUpdate
  const res = await request
    .patch(`api/v1/tasks/${id}`)
    .send({ name, details, difficulty, completed })
  return res.body
}

//-----------Decided to make API call functions inside React hooks
//-----------as I make the React hooks

// export function useTasks() {
//   return useQuery({
//     queryKey: ['tasks'],
//     queryFn: async () => {
//       const res = await request.get('api/v1/tasks')
//       return res.body 
//     },
//   })
// }

// export function useAddTask() {
//   const client = useQueryClient()

//   return useMutation({
//     mutationFn: async (newTask: Task) => {
//       const res = await request.post('api/v1/tasks').send(newTask)
//       return res.body
//     },
//     onSuccess: () => {
//       client.invalidateQueries({ queryKey: ['tasks'] })
//     },
//   })
// }

// export function useDelTask() {
//   const client = useQueryClient()

//   return useMutation({
//     mutationFn: async (id: number) => {
//       const res = await request.del(`api/v1/tasks/${id}`)
//       return res.body as Task[]
//     },
//     onSuccess: () => {
//       client.invalidateQueries({ queryKey: ['tasks'] })
//     },
//   })
// }

// export function useUpdateTask() {
//   const client = useQueryClient()

//   return useMutation({
//     mutationFn: async (taskUpdate: Task) => {
//       const { id, name, details, difficulty, completed } = taskUpdate
//       const res = await request
//         .patch(`api/v1/tasks/${id}`)
//         .send({ name, details, difficulty, completed })
//       return res.body as Task[]
//     },
//     onSuccess: () => {
//       client.invalidateQueries({ queryKey: ['tasks'] })
//     },
//   })
// }
