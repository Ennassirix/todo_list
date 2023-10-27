import React, { useState } from 'react';

export default function UpdateTasks({ task, updateTask, taskID }) {
    const [update, setUpdate] = useState(task.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(taskID, update); // Call the update function to save changes
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setUpdate(e.target.value)}
                value={update}
            />
            <button className='btn btn-primary' type="submit">Save</button>
        </form>
    );
}
