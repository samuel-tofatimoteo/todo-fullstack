/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, task: 'Dance in the rain', completed: true , priority:"High"},
    {id: 2, task: 'Fish on the moon', completed: false , priority:"Medium"},
    {id: 3, task: 'Wish upon a star', completed: false , priority:"Low"}
  ]);
}
