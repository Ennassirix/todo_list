
import { useContext } from 'react'
import { taskContext } from '../context/Context'
import uuid from 'react-uuid';

export default function InputTask() {
    
    const { value, setTasks, setValue } = useContext(taskContext)
    const addTasks = e => {
        e.preventDefault()
        setTasks(task => {
            return [
                ...task,
                {
                    id: uuid(),
                    title: value,
                    complited: false
                }
            ]
        })
        setValue('')
    }
    return (
        <form action="" className='d-flex'>
            <input type="text"
                className='form-control w-75'
                placeholder='Try typing ...'
                required
                onChange={e => setValue(e.target.value)}
                value={value}
            />
            <button
                className='btn btn-primary mx-2'
                onClick={addTasks}
            >Add Task</button>
        </form>
    )
}
