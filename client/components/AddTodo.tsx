import React from 'react';
import { useAddNewTodo } from './hooks/useTodo'; // Ensure the path is correct

function AddTodo() {
  const addTodo = useAddNewTodo();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const todo = form.get('todoText')?.toString() || ''; // Convert the FormDataEntryValue to string
    const importance = form.get('importance')?.toString() || 'Low'; // Default importance set to 'Low' if not specified

    if (todo) {
      addTodo.mutate({ todo: todo, complete: false, importance: importance });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="todoText"
          aria-label="add todo"
          className="new-todo"
          placeholder="What have you got 'todo' next?"
          autoFocus={true}
        />
        <select name="importance" defaultValue="Meh" className="importance-select">
          <option value="Extremely">Extremely</option>
          <option value="Moderately">Moderately</option>
          <option value="Meh">Meh</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}

export default AddTodo;

