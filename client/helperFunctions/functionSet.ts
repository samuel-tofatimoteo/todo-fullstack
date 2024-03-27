export function taskSort(a, b){
    if (a.priority === b.priority) {
        return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : a.name.toUpperCase() < b.name.toUpperCase() ? -1: 0
       }
       return a.priority > b.priority ? 1 : -1
}