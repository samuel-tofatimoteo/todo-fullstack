/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('toDo', (table) => {
    table.integer('id')
    table.string('taskDetails')
    table.string('priority')
    table.boolean('completed')
    table.string('NewTodo')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('toDo')
}
