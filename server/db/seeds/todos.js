/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { task: 'Make Back end', priority: 'high', completed: false },
    { task: 'Make Front end', priority: 'medium', completed: false },
    { task: 'Work on CSS', priority: 'low', completed: false },
  ])
}
