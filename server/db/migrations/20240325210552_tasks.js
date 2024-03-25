export async function up(knex) {
    return knex.schema.createTable('tasks', (table) => {
      table.integer('id')
      table.string('name')
      table.string('details')
      table.integer('priority')
      table.boolean('completed')
    })
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('tasks')
  }