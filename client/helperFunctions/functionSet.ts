import { TaskDB } from '../../Models/Task'

export function taskSort(a: TaskDB, b: TaskDB) {
  if (a.priority === b.priority) {
    return a.name.toUpperCase() > b.name.toUpperCase()
      ? 1
      : a.name.toUpperCase() < b.name.toUpperCase()
        ? -1
        : 0
  }
  return a.priority > b.priority ? 1 : -1
}
