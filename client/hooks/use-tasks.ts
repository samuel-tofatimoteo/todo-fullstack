import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

import type { Todo } from '../../models/todo'

export default function useTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await request.get('/api/v1/todos')
      if (res.ok) {
        return res.body as { todos: Todo[] }
      }

      throw new Error(res.text)
    },
  })
}
