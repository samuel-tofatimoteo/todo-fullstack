/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up (knex) {
    return knex.schema.createTable('todos', (table) => {
        table.integer('id').primary()
        table.string('task')
        table.boolean('completed')
        table.string('importance')
    })
  
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('todos')  
}
