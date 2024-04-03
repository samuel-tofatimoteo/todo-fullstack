export function up(knex) {
  return knex.schema.createTable('todo', (table) => {
    table.increments('id').primary()
    table.string('todo_info')
    table.boolean('completed').defaultTo(false)
    table.timestamps(true, true)
  })
}

export function down(knex) {
  return knex.schema.dropTable('todo')
}
