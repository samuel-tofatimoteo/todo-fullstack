/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, details: 'cleaning', priority: 1, completed: true },
    { id: 2, details: 'study', priority: 9, completed: false },
    { id: 3, details: 'sleep', priority: 10, completed: true },
  ])
}
