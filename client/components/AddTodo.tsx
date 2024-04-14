import { useAddNewTodo } from './hooks/todos'

function AddTodo() {
  const addTodo = useAddNewTodo()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const todo = form.get('todoText')?.valueOf() as string
    addTodo.mutate({ todo: todo, complete: false })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="todoText"
          aria-label="add todo"
          className="new-todo"
          placeholder="Write your todo here!"
          autoFocus={true}
        />
      </form>
    </>
  )
}

export default AddTodo
