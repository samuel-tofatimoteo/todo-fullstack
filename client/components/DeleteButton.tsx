import * as api from '../apis/apiclient'
import { useMutation } from '@tanstack/react-query'

export default function DeleteTodo({ id }: { id: number }) {
  const mutation = useMutation(
    { mutationFn: api.deleteTodo(id) },
    {
      onSuccess: () => {
        console.log(`Todo with ID ${id} deleted successfully`)
      },
      onError: (error: Error) => {
        console.error(`Error deleting todo with ID ${id}:`, error)
      },
    },
  )

  const handleDelete = async () => {
    try {
      await mutation.mutateAsync()
    } catch (error) {
      console.error(`Error deleting todo with ID ${id}:`, error)
    }
  }

  return <button className="destroyed" onClick={handleDelete}></button>
}
