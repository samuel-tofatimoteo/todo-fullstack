export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task_detail: 'do dishes', priority: 1, completed: 'no' },
    { id: 2, task_detail: 'clean house', priority: 2, completed: 'no' },
    { id: 3, task_detail: 'do shopping', priority: 3, completed: 'no' },
  ])
}
