import {getTasks} from '../apis/apiClient'
import { Task, TaskDB } from '../../Models/Task'
import { useQuery } from '@tanstack/react-query'

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
        return (
            <>
            <ul>
                {data.map((task) =>
                <li key={task.id}>{task.name}</li>)}
            </ul>
            
            </>
        )
    }

}