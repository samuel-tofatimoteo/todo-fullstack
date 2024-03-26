import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/apiClient'

export function TodoList() {
  const {
    isPending,
    isError,
    data: vegetables,
    error,
  } = useQuery({
    queryKey: ['vegetables'],
    queryFn: () => api.fetchVeges(),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
   
  )
}