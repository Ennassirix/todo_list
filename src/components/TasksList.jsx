import React, { useContext, useState } from 'react';
import { taskContext } from '../context/Context';
import UpdateTasks from './UpdateTasks';

export default function TasksList() {
    const [activeTaskId, setActiveTaskId] = useState(null);
    const { setTasks, tasks } = useContext(taskContext);
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const changeComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    }

    const updateTask = (id, updatedTitle) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, title: updatedTitle } : task));
        setActiveTaskId(!id)

    }

    return (
        <ul className='list-group mt-3'>
            {tasks.map(task => (
                <li className={`alert ${task.completed ? 'alert-success' : 'alert-primary'}`} key={task.id}>
                    {activeTaskId === task.id ? (
                        <UpdateTasks task={task} updateTask={updateTask} taskID={task.id} />
                    ) : (
                        <>
                            <input type="checkbox" className='mx-2' checked={task.completed} onChange={() => changeComplete(task.id)} />
                            <span>{task.title}</span>
                            <button className='btn btn-danger mx-2' onClick={() => deleteTask(task.id)}>Delete</button>
                            <button className='btn-secondary btn' onClick={() => setActiveTaskId(task.id)}
                            style={{display:`${task.completed ? 'none' : 'inline-block'}` }}
                            >Update</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}
