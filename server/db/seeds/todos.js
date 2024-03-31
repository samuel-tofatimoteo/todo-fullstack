/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { task: 'Make Back end', priority: 1, completed: false },
    { task: 'Make Front end', priority: 2, completed: false },
    { task: 'Work on CSS', priority: 2, completed: false },
  ])
}
