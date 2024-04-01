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
      task: 'run very fast awayawayaway',
      priority: 'high',
      completed: false,
    },
    {
      id: 2,
      task: 'stare back from the void',
      priority: 'yeah',
      completed: false,
    },
    { id: 3, task: 'get to the depths', priority: 'uhoh', completed: false },
  ])
}
