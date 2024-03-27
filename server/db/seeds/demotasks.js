/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */


export async function seed(knex) {
  await knex('tasks').del()
  await knex('tasks').insert([
    {id: 1, name: 'groceries', details: 'go to supermarket and buy food for picnic', priority: 2, completed: false},
    {id: 2, name: 'walk dog', details: 'take Buster to the park and walk around the lake', priority: 1, completed: false},
    {id: 3, name: 'emails', details: 'respond to work emails', priority: 1, completed: true},
  ]);
}
