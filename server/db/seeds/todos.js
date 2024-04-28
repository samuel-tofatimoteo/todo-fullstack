/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, todo: 'Completing Trellos', completed: true, priority: 'high' },
    {
      id: 2,
      todo: 'Going to a HITT class',
      completed: false,
      priority: 'medium',
    },
    { id: 3, todo: 'Doing the laundry', completed: false, priority: 'low' },
  ])
}
