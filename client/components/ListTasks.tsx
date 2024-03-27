import {getTasks} from '../apis/apiClient'
import { Task, TaskDB } from '../../Models/Task'
import { useQuery } from '@tanstack/react-query'
import { taskSort } from '../helperFunctions/functionSet'

export function ListTasks(){

    const { isLoading, isError, data, error }= useQuery({
        queryKey: ['tasks'],
        queryFn: () => getTasks()})

    if(isLoading){
        return <p>Loading ...</p> 
    }

    if(isError){
        return <p>Error!!</p>
    }
    
    if(data){
        data.sort((a, b) => taskSort(a, b))
        return (
            <>
            <ul>
                {data.map((task) =>
                <li key={task.id}>
                    <span className='task'>{task.name}</span> {task.details}
                </li>)}
            </ul>
            
            </>
        )
    }
}


