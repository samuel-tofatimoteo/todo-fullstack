/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, name: 'slay dragon', completed: true, importance: 'Extremely' },
    { id: 2, name: 'wash dishes', completed: false, importance: 'Meh' },
    { id: 3, name: 'walk dog', completed: true, importance: 'Very' },
    { id: 4, name: 'tidy room', completed: true, importance: 'Meh' },
    {
      id: 5,
      name: 'buy gift for mothers day',
      completed: false,
      importance: 'Extremely',
    },
  ])
}
