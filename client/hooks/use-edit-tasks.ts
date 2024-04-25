import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { Todo } from '../../models/todo'

export default function useTaskEvent(id: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (values: Todo) => {
      console.log(values)

      await request.patch(`/api/v1/todos/${id}`).send(values)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', id] })
    },
  })
}
