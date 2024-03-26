import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import * as api from '../apis/apiClient'
import { Book } from '../../models/books'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const [input, setInput] = useState({
    title: '',
    author: '',
    isRead: false,
  })
  const client = useQueryClient()
  const mutation = useMutation({
    mutationFn: async (data: Book) => await api.addBook(data),
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target)
    mutation.mutate(input)
  }

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }

  return (
    <form>
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
      <button onSubmit={handleSubmit} className="submitButton">
        Submit
      </button>
    </form>
  )
}

export default AddTodo
