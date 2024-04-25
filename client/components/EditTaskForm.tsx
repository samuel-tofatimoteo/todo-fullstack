import { useCallback, useState, FormEvent, ChangeEvent } from 'react'
import { TodoData } from '../../models/todo'

interface Props extends TodoData {
  submitLabel: string
  onSubmit: (_: TodoData) => void
}

function EditTaskForm({ task_detail, priority, completed }: Props) {
  const [formState, setFormState] = useState({
    task_detail,
    priority,
    completed,
  })

  const handleSubmit = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault()
      onSubmit(formState)
    },
    [formState],
  )

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
        />
      </form>
    </>
  )
}

export default EditTaskForm
