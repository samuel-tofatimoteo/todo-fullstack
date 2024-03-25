/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'aquire cat', complete: false },
    { id: 2, task: 'pet cat', complete: false },
    { id: 3, task: 'nap', complete: false },
  ])
}
