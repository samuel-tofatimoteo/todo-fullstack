/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('todos').del()
  await knex('todos').insert([
    {
      name: 'Fight Mike Tyson',
      details:
        'Somehow you have to fight Former Heavyweight Boxing Champion Mike Tyson',
      completed: false,
    },
    { name: 'Dishes', details: 'Dishes are dirty', completed: false },
    { name: 'Washing', details: 'Washing is not washed', completed: false },
  ])
}
