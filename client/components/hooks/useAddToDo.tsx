import * as api from '../../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface Params {
  todo: string
  priority: string
}

function useAddTodo() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: Params) => api.addTodos(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
