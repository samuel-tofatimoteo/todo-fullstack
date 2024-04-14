import { TodoId, TodoIntrfc } from '../../models/model'
import { useUpdateTodos, useDeleteTodo, useGetTodos } from './hooks/todos'
import { useState } from 'react'

function TodoList() {
  const { data, isLoading, isError, error } = useGetTodos()
  const deleteTodo = useDeleteTodo()
  const updateTodo = useUpdateTodos()

  const [update, setUpdate] = useState(0)
  const [input, setInput] = useState({ todo: '', complete: false })

  function handleDelete(id: number) {
    console.log(id)

    deleteTodo.mutate(Number(id))
  }

  function handleUpdate(e) {
    e.preventDefault()
    const data = { id: update, update: input }
    updateTodo.mutate(data)
    setUpdate(0)
  }

  function handleChange(e) {
    setInput(e.target.value)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  if (data) {
    return (
      <>
        <section className="main">
          <ul className="todo-list">
            {data.map((todo: TodoId) => {
              return (
                <li key={todo.id}>
                  <div className="view">
                    <input className="toggle" type="checkbox" />
                    {todo.id === update ? (
                      <form onSubmit={handleUpdate}>
                        <input
                          placeholder="Update your todo"
                          value={todo.todo}
                          onChange={handleChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Escape') {
                              setUpdate(0)
                            }
                          }}
                        ></input>
                      </form>
                    ) : (
                      <label
                        id={String(todo.id)}
                        onDoubleClick={() => setUpdate(todo.id)}
                      >
                        {todo.todo}
                      </label>
                    )}

                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="destroy"
                    ></button>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </>
    )
  }
}

export default TodoList
