import { Todos } from '../../models/todos'

function TodoList() {
  const todos: Todos[] = [
    { id: 1, todo: 'Wash the dog', completed: false, priority: 'high' },
    { id: 2, todo: 'Do the weekly shop', completed: true, priority: 'medium' },
    { id: 3, todo: 'Climb a tree', completed: false, priority: 'high' },
  ]
  return (
    <>
      {todos.map((todo: Todos) => {
        return (
          <div key={todo.id} className="todo-list">
            <p>{todo.todo}</p>
            <p>
              <strong>PRIORITY:</strong> {todo.priority}
            </p>

            <label>
              Completed: <input type="checkbox" name="completed" />
            </label>
          </div>
        )
      })}
    </>
  )
}

export default TodoList
