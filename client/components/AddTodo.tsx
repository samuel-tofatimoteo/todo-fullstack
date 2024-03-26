import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import * as api from '../apis/apiClient'
import { Book } from '../../models/books'
import { useAddBook } from './hooks'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const [input, setInput] = useState({
    title: '',
    author: '',
    isRead: false,
  })
  // const client = useQueryClient()
  // const mutation = useMutation({
  //   mutationFn: async (data: Book) => await api.addBook(data),
  //   onSuccess: async () => {
  //     client.invalidateQueries({ queryKey: ['todos'] })
  //   },
  // })

  const mutation = useAddBook()

  async function handleSubmit(e: { preventDefault: () => void; target: any }) {
    e.preventDefault()

    mutation.mutate(input)
    setInput({
      title: '',
      author: '',
      isRead: false,
    })
  }

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        onChange={handleChange}
        className="new-todo"
        placeholder="What needs to be done?"
        value={input.title}
      />
      <input
        name="author"
        onChange={handleChange}
        className="new-todo"
        placeholder="Author"
        value={input.author}
      />
      <input
        // type="checkbox"
        name="status"
        // onChange={handleChange}
        className="new-todo"
        placeholder="Reading Status"
        // value={input.status}
      />
      <button className="submitButton">Submit</button>
    </form>
  )
}

export default AddTodo
