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
      name: 'Dishes',
      details: 'Big pile of phat dirty plates & cups that need cleaning',
      difficulty: 'life in danger',
      completed: false,
    },
    {
      id: 2,
      name: 'Washing',
      details:
        'You legit need to wash those clothes or your wearing your undies to work',
      difficulty: 'Easy money',
      completed: true,
    },
    {
      id: 3,
      name: 'Fight Mike Tyson',
      details:
        'Some how you ended up in a ring fight with former Heavyweight champ Mike Tyson',
      difficulty: '0.01% chance of Success',
      completed: true,
    },
  ])
}
