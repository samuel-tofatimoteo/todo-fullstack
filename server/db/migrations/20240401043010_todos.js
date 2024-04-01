/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export default function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.integer('id').primary()
    table.string('task')
    table.string('priority')
    table.boolean('completed')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export default function down(knex) {
  return knex.schema.dropTable('todos')
}
