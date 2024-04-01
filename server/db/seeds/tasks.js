/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {
      id: 1,
      name: 'Shopping',
      details: 'Go to the supermarket and do shopping',
      priority: 1,
      completed: false,
    },
    {
      id: 2,
      name: 'Gym',
      details: 'Go to the gym and condition yourself',
      priority: 3,
      completed: false,
    },
    {
      id: 3,
      name: 'Zoom Meetings',
      details: 'Attend zoom meetings for the day',
      priority: 2,
      completed: false,
    },
  ])
}
