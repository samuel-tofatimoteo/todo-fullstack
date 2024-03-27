import * as api from '../apis/apiClient'
import { taskSort } from '../helperFunctions/functionSet'
import { Task, TaskDB } from '../../Models/Task'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

function ShowCompleted(){

    const queryClient = useQueryClient()

    function handleClick(e){
        e.preventDefault()
        const {value} = e.target
        taskMarkIncomplete.mutate(value)
      }
    
      const taskMarkIncomplete = useMutation({
        mutationFn: (change : Task) => api.incompleteTask(change),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['tasks'] })
        },
      })

    const { isLoading, isError, data, error }= useQuery({
        queryKey: ['tasks'],
        queryFn: () => api.getCompleteTasks()})

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
            <h1>Completed</h1>
            <ul>
                {data.map((task : TaskDB) =>
                <li key={task.id}>
                    <span className='task'>{task.name}</span> <button value={task.id} aria-label="return to incomplete list" className="completed" onClick={handleClick}>^</button>
                </li>)}
            </ul>
            
            </>
        )
    }

}

export default ShowCompleted
