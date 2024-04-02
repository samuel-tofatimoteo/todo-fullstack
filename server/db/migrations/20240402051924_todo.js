export async function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id').primary()
    table.string('task_detail')
    table.integer('priority')
    table.boolean('completed')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('todos')
}
