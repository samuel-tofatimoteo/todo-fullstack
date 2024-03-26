import { Todo } from '../../models/Todo'
export default function TodoList() {
  const todos: Todo[] = [
    { task: 'aquire cat', complete: false },
    { task: 'pet cat', complete: false },
    { task: 'nap', complete: false },
  ]

  return (
    <>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li key={todo.id}>Task: {todo.task}</li>
            <li>
              <input type="checkbox" name="complete">
                {todo.complete}
              </input>
            </li>
          </ul>
        )
      })}
    </>
  )
}
