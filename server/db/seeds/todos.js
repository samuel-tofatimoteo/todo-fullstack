/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('todo').insert([
    { id: 1, todo: 'Coding', due_date: 12, completed: true },
    { id: 2, todo: 'MMA', due_date: 23, completed: false },
    { id: 3, todo: 'Long Run', due_date: 7, completed: true },
  ])
}
