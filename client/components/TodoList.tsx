import { toDo } from '../../models/toDo'

export function ToDoList() {
  const todos = [
    { taskDetails: 'walk the rabbit', priority: 2, completed: true },
    { taskDetails: 'walk the new dog', priority: 1, completed: true },
    { taskDetails: 'walk the mouse', priority: 8, completed: false },
  ] as toDo[]

  return (
    <>
      {todos.map((todos) => {
        return <p key={todos.taskDetails}>{todos.completed}</p>
      })}
    </>
  )
}
