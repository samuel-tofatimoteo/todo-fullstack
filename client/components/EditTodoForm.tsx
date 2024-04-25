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
      <input type="hidden" name="id" value="{{tasks.id}}" />

      <div>
        <div>
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
        </div>
        <div>
          <label htmlFor="priority" className="label">
            Priority
          </label>
          <input
            type="text"
            id="priority"
            name="priority"
            onChange={handleChange}
            value={formState.priority}
          />
        </div>
        <div>
          <label htmlFor="completed" className="label">
            Completed
          </label>

          <input
            type="checkbox"
            id="completed"
            name="completed"
            value={toString(formState.completed)}
          />
        </div>
      </div>

      <button>Update Task</button>
    </form>
  )
}
