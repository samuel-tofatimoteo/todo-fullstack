/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {
      id: 1,
      details: 'Declutter your desk',
      completed: false,
      added_by_user: '',
    },
    {
      id: 2,
      details: 'Read a book at least 30 minutes',
      priority: 9,
      completed: false,
    },
    { id: 3, details: 'Call a friend', added_by_user: '', completed: false },
  ])
}
