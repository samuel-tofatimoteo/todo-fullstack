import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addTask, delTask, getTasks, updateTask } from "../apis/tasks"
import { Task } from "../../models/Task"

export function useTasks() {
    return useQuery({
      queryKey: ['tasks'],
      queryFn: () => getTasks()
    })
  }
  
  export function useAddTask() {
    const client = useQueryClient()
  
    return useMutation({
      mutationFn: (newTask: Task) => addTask(newTask) ,
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ['tasks'] })
      },
    })
  }
  
  export function useDelTask() {
    const client = useQueryClient()
  
    return useMutation({
      mutationFn: (taskId: number) => delTask(taskId),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ['tasks'] })
      },
    })
  }
  
  export function useUpdateTask() {
    const client = useQueryClient()
  
    return useMutation({
      mutationFn: (taskUpdate: Task) => updateTask(taskUpdate),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ['tasks'] })
      },
    })
  }
  