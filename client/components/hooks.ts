import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'

import * as api from '../apis/apiClient'
import { Book } from '../../models/books'

export function useAddBook() {
  const client = useQueryClient()
  const mutation = useMutation({
    mutationFn: async (data: Book) => await api.addBook(data),
    onSuccess: async () => {
      client.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return mutation
}
