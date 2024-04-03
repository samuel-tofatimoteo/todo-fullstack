export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('todo').insert([
    { todo_info: 'Todo number 1', completed: false },
    { todo_info: 'Todo number 2', completed: false },
    { todo_info: 'Todo number 3', completed: true },
  ])
}
