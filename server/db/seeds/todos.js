/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'slay dragon', completed: true, importance: 'Extremely' },
    { id: 2, task: 'wash dishes', completed: false, importance: 'Meh' },
    { id: 3, task: 'walk dog', completed: true, importance: 'Moderately' },
    { id: 4, task: 'tidy room', completed: true, importance: 'Meh' },
    {
      id: 5,
      task: 'buy gift for mothers day',
      completed: false,
      importance: 'Extremely',
    },
  ])
}