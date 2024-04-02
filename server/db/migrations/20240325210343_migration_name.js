export function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments().primary
    table.string('task')
    table.boolean('complete')
  })
}

export function down(knex) {
  return knex.schema.dropTable('todos')
}
