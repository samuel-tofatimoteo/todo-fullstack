import * as api from '../../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface Params {
    id: number
}

function useDeleteTodos(){
    const client = useQueryClient()
    return useMutation({
        mutationFn: (values: Params) => api.deleteTodos(values.id),
        onSuccess: () => {client.invalidateQueries({queryKey:["todos"]})}
    })
}

export default useDeleteTodos