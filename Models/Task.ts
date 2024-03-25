export interface Task {
    name: string,
    details: string,
    priority: number,
    completed: boolean
}

export interface TaskDB extends Task {
    id: number
}


// REF
// table.integer('id')
//       table.string('name')
//       table.string('details')
//       table.number('priority')
//       table.boolean('completed')