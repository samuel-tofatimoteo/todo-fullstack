/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('toDo').del()
  await knex('toDo').insert([
    { id: 1, taskDetails: 'walk the dog', priority: 'today', completed: false },
    {
      id: 2,
      taskDetails: 'clean the dishes',
      priority: 'tomorrow',
      completed: false,
    },
    {
      id: 3,
      taskDetails: 'read a book',
      priority: 'yesterday',
      completed: true,
    },
  ])
}
