/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('tasks', (table) => {
    // TODO: add .primary() onto the end of your id column. This ensures a new id is created when a new task is added
    table.integer('id')
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
