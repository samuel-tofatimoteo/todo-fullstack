/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */


export async function seed(knex) {
  await knex('tasks').del()
  await knex('tasks').insert([
    {id: 1, name: 'groceries', details: 'go to supermarket and buy food for picnic', priority: 2, completed: false},
    {id: 2, name: 'walk dog', details: 'take Buster to the park and walk around the lake', priority: 1, completed: false},
    {id: 3, name: 'emails', details: 'respond to work emails', priority: 1, completed: false},
    {id: 4, name: 'garden', details: 'mow lawns, water flowers, weed pumpkin patch', priority: 3, completed: false},
    {id: 5, name: 'finish app', details: 'deploy fullstack app with database', priority: 2, completed: true},
    {id: 6, name: 'return books', details: 'drop off due books at library', priority: 1, completed: false},
    {id: 7, name: 'have fun', details: 'have fun on Friday Evening with your classmates! :)', priority: 3, completed: false},
    {id: 8, name: 'g-g-g-g-g-hoooost', details: 'call ghostbusters', priority: 1, completed: false},
    {id: 9, name: 'knitting', details: 'knit a sweater', priority: 2, completed: true},
    {id: 10, name: 'pay bills', details: 'water and power bills due this friday', priority: 1, completed: true},
    {id: 11, name: 'call grandpa', details: 'wish him a happy 80th birthday!', priority: 1, completed: true},
    {id: 12, name: 'meditate', details: 'practice mindfulness for 15 minutes', priority: 3, completed: false},
  ]);
}


