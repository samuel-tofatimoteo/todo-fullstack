import * as api from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export default function TodoList() {
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

  if (list) {
    return (
      <section className="main">
        {/* <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label> */}
        <ul className="todo-list">
          {list.map((book) => (
            <li key={book.id}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{book.title}</label>
                <span className="author">{book.author}</span>
                <button className="destroy"></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
