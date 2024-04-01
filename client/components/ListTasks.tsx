import { Task, TaskDB } from '../../Models/Task'
import { useMutation, useQuery, useQueryClient  } from '@tanstack/react-query'
import { taskSort } from '../helperFunctions/functionSet'
import * as api from '../apis/apiClient'
import { useState } from 'react'

export function ListTasks(){

    const queryClient = useQueryClient()

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
                    <span className='task'>{task.name}</span> {task.details} 
                    <button value={task.id} aria-label="mark task as completed" className="completed action-button" onClick={handleClick}>✔</button>
                    <button value={task.id} aria-label="delete task" className="deleted action-button" onClick={handleCross}>✘</button>
                </li>)}
            </ul>
            </>
        )
    }
}


