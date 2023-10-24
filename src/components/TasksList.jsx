import { React, useContext, useState } from 'react'
import { taskContext } from '../context/Context'

export default function TasksList() {
    const [complited,setComplited] = useState(false)
    const { value, setTasks, tasks } = useContext(taskContext)
    const deleteTasks = (id) => {
        setTasks(tasks.filter(task => task.id !== id) )
    }
    return (
        <ul className='list-group mt-3'>
            {
                tasks.map(task => {
                    return (
                        <li className='alert alert-primary' key={task.id}>
                            <input type="checkbox" className='mx-2' />
                            <span>{task.title} </span>
                            <button className='btn btn-danger mx-2'
                            onClick={()=>deleteTasks(task.id)}
                            >Delete</button>
                            <button className='btn-secondary btn'>Update</button>
                        </li>
                    )
                })
            }

        </ul>
    )
}
