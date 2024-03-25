/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, todo: 'Juggling knives', completed: true, priority: 'high' },
    { id: 2, todo: 'Dancing in the rain', completed: false, priority: 'low' },
    { id: 3, todo: 'Talk to the moon', completed: false, priority: 'medium' },
  ])
}
