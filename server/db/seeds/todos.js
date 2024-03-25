/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { task_details: 'Make a task', priority: 1, completed: false },
    { task_details: 'Do the task', priority: 2, completed: false },
    { task_details: 'Mark task as complete', priority: 3, completed: false },
  ])
}
