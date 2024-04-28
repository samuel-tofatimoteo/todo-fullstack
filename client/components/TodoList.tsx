import { TodoId } from '../../models/todos'
import { useUpdateTodos, useDeleteTodo, useGetTodos } from './hooks/useTodo'
import { useState } from 'react'

function TodoList() {
  const { data, isLoading, isError, error } = useGetTodos()
  const deleteTodo = useDeleteTodo()
  const updateTodo = useUpdateTodos()

  const [update, setUpdate] = useState(0)
  const [input, setInput] = useState({ task: '', completed: false })

  function handleDelete(id: number) {
    deleteTodo.mutate(Number(id))
  }

  function handleUpdate(e) {
    e.preventDefault()
    const data = { id: update, update: input }
    updateTodo.mutate(data)
    setUpdate(0)
  }

  function handleChange(e) {
    const newInput = { ...input, task: e.target.value }
    setInput(newInput)
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
                          name="task"
                          type="text"
                          placeholder={todo.task}
                          onChange={handleChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Escape') {
                              setInput({ task: '', completed: false })
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
                        {todo.task}
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