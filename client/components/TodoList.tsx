import React from 'react'
import { Todo } from '../../models/todo'

export default function TodoList() {
  const todos = [
    { details: 'shopping', priority: 10, completed: false },
    { details: 'coding', priority: 10, completed: false },
    { details: 'drink coffee', priority: 5, completed: true },
  ] as Todo[]

  return (
    <div>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.details}</p>
      })}
    </div>
  )
}
