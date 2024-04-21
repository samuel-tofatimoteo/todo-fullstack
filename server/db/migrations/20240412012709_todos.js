/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('todos', function (table) {
    table.increments('id')
    table.string('name')
    table.string('details')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('due_date')
    table.boolean('completed').defaultTo(false)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('todos')
}
