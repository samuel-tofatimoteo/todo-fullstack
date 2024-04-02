import { Todos, TodosId } from '../../models/TodosModels'
import { useDeleteTodo, useUpdateTodo } from './Hooks/useTodo'
import useGetTodos from './Hooks/useGetTodo'
import { useState } from 'react'

function TodoList() {
  const { data, isLoading, isError, error } = useGetTodos()
  const deleteTodo = useDeleteTodo()
  const updateTodo = useUpdateTodo()

  const [update, setUpdate] = useState(0)
  const [input, setInput] = useState('')

  function handleDelete(e) {
    // console.log(e.target.id)
    deleteTodo.mutate(Number(e.target.id))
  }

  function handleUpdate(e) {
    e.preventDefault()
    console.log(input, update)
    // console.log(e.target.id, e.target.value, 'hello')
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
            {data.map((todo: TodosId) => {
              return (
                <li key={todo.id}>
                  <div className="view">
                    <input className="toggle" type="checkbox" />
                    {todo.id === update ? (
                      <form onSubmit={handleUpdate}>
                        <input
                          placeholder={todo.task}
                          value={input}
                          onChange={handleChange}
                          autoFocus
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
                        {todo.task}
                      </label>
                    )}

                    <button
                      onClick={handleDelete}
                      className="destroy"
                      id={String(todo.id)}
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
