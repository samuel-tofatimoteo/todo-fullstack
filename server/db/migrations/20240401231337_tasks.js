/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('tasks', (table) => {
    // TODO: change 'table.integer' to 'table.increments'
    table.increments('id')
    table.string('name')
    table.string('details')
    table.integer('priority')
    table.boolean('completed')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('tasks')
}
