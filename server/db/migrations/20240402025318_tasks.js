/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id')
    table.string('name')
    table.string('details')
    table.string('difficulty')
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
