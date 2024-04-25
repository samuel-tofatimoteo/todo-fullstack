import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

import { Todo, TodoData } from '../../models/todo'

export default function useTaskData(id: number) {
  return useQuery({
    queryKey: ['tasks', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/todos/${id}`)
      return res.body as TodoData
    },
  })
}
