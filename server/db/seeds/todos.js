/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, what: 'study', when: '5pm', done: false },
    { id: 2, what: 'shop', when: '3pm', done: false },
    { id: 3, what: 'cook', when: '12pm', done: false },
  ])
}
