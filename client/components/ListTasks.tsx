import { Task, TaskDB } from '../../Models/Task'
import { useMutation, useQuery, useQueryClient  } from '@tanstack/react-query'
import { taskSort } from '../helperFunctions/functionSet'
import * as api from '../apis/apiClient'
import ShowCompleted from './ShowCompleted'
import { useState } from 'react'

export function ListTasks(){

    const queryClient = useQueryClient()

    // ATTEMPTED SHOW COMPLETED - to fix
    // const [completeList, setCompleteList] = useState('Show Completed')

    // function handleList(e){
    //   const {value} = e.target
    //   setCompleteList(value)
    // }

    function handleClick(e){
        e.preventDefault()
        const {value} = e.target
        taskMarkComplete.mutate(value)
      }
    
      const taskMarkComplete = useMutation({
        mutationFn: (change : Task) => api.completeTask(change),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['tasks'] })
        },
      })

      function handleCross(e){
        e.preventDefault()
        const {value} = e.target
        taskDelete.mutate(value)
      }
    
      const taskDelete = useMutation({
        mutationFn: (change : Task) => api.deleteTask(change),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['tasks'] })
        },
      })


    const { isLoading, isError, data, error }= useQuery({
        queryKey: ['tasks'],
        queryFn: () => api.getIncompleteTasks()})

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
                {data.map((task : TaskDB) =>
                <li key={task.id}>
                    <span className='task'>{task.name}</span> {task.details} <button value={task.id} aria-label="mark task as completed" className="completed" onClick={handleClick}>✔</button> <button value={task.id} aria-label="delete task" className="delete-it" onClick={handleClick}>✘</button>
                </li>)}
            </ul>
            {/* not functional - attempted display completed tasks
            {completeList == 'Show Completed' && <button value='Hide' onClick={handleList}>{completeList}</button>}
            {completeList == 'Hide' && <><ShowCompleted/><button value='Show Completed' onClick={handleList}>{completeList}</button></>} */}
            </>
        )
    }
}


