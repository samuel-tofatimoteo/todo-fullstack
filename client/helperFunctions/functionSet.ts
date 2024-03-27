export function taskSort(a, b){
    if (a.priority === b.priority) {
        return a.name > b.name ? 1 : a.name < b.name ? -1: 0
       }
       return a.priority > b.priority ? 1 : -1
}