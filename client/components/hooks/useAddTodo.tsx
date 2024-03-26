import * as api from '../../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface Params {
  todo: string
}

function useAddTodo() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: Params) => api.addTodo(values.todo),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

export default useAddTodo
