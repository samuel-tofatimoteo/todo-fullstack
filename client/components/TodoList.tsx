import * as api from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import { Book, BookWithId } from '../../models/books'
import { useDeleteBook } from './hooks'
import { useState } from 'react'

export default function TodoList() {
  const [id, setId] = useState(0)
  const [count, setCount] = useState(0)

  const status = [
    ['red', 'not read'],
    ['orange', 'reading'],
    ['green', 'read'],
  ]

  const deleteHook = useDeleteBook(id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => await api.getAllBooks(),
  })

  const list = data
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error: API not found</p>
  }

  function handleDelete(e) {
    const id = e.target.closest('li').dataset.id
    // await api.delBookById(id)
    setId(id)
    deleteHook.mutate()
  }

  function changeStatus(e) {
    console.log(e.target.className)
    const newCount = count === 2 ? 0 : count + 1
    setCount(newCount)
  }

  if (list) {
    return (
      <section className="main">
        {/* <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label> */}
        <ul className="todo-list">
          {list.map((book: BookWithId) => (
            <li data-id={book.id} key={book.id}>
              <div className="view">
                <button
                  // htmlFor={`book${book.id}`}
                  className={`toggle ${status[count][0]}`}
                  onClick={(e) => changeStatus(e)}
                >
                  {status[count][1]}
                </button>
                <input id={`book${book.id}`} type="checkbox" />
                <p className="title">{book.title}</p>
                <span className="author">{book.author}</span>
                <button onClick={handleDelete} className="destroy">
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
