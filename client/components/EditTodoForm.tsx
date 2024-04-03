import { TodoData } from '../../models/todo'

interface Props extends TodoData {
  submitLabel: string
  onSubmit: (_: TodoData) => void
}

function EditTodoForm() {
  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
      />
    </>
  )
}

export default EditTodoForm
