/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('todo').insert([
    { id: 1, todo: 'wash dishes', due_date: 2, completed: true },
    { id: 2, todo: 'clean laundry', due_date: 5, completed: false },
    { id: 3, todo: 'slay dragon', due_date: 55, completed: true },
  ])
}
