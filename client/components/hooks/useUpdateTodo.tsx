import * as api from '../../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface Params {
  id: number
  completed: boolean
}

function useUpdateTodos() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: Params) =>
      api.updateTodo(values.id, { completed: values.completed }),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

export default useUpdateTodos
