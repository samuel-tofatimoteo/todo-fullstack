import * as api from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import { Book, BookWithId } from '../../models/books'
import { useDeleteBook } from './hooks'

export default function TodoList() {
  const deleteHook = useDeleteBook()
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

  async function handleDelete(e) {
    const id = e.target.closest('li').dataset.id
    await api.delBookById(id)
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
                <input className="toggle" type="checkbox" />
                <label>{book.title}</label>
                <span className="author">{book.author}</span>
                <button onClick={handleDelete} className="destroy"></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
