import { useCallback, useState, FormEvent, ChangeEvent } from 'react'
import { useTasks } from '../hooks/api.ts'
import { TodoData } from '../../models/todo.ts'

interface Props extends TodoData {
  onSubmit: (_: TodoData) => void
}

export default function EditEventForm({
  task_detail,
  priority,
  completed,
  onSubmit,
}: Props) {
  const [formState, setFormState] = useState({
    task_detail,
    priority,
    completed,
  })

  const handleChange = useCallback(
    (
      evt: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = evt.target
      setFormState((prev) => ({
        ...prev,
        [name]: value,
      }))
    },
    [],
  )

  const handleSubmit = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault()
      onSubmit(formState)
    },
    [formState],
  )

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* <input type="hidden" name="id" value="{{tasks.id}}" /> */}

      <label htmlFor="task_detail" className="label">
        Task
      </label>
      <input
        type="text"
        id="task_detail"
        name="task_detail"
        onChange={handleChange}
        value={formState.task_detail}
      />

      <button>Update Task</button>
    </form>
  )
}
