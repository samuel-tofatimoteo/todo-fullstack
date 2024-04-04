/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('todos').del()
  await knex('todos').insert([
    {
      id: 1,
      task: 'Have shower',
      completed: false,
    },
    {
      id: 2,
      task: 'Get Dressed',
      completed: false,
    },
    {
      id: 3,
      task: 'Eat Breakfast',
      completed: false,
    },
  ])
}
