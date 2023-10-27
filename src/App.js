import 'bootstrap/dist/css/bootstrap.min.css';
import InputTask from './components/InputTask';
import TasksList from './components/TasksList';
import './App.css'
import { useEffect, useState } from 'react';
import { taskContext } from './context/Context'
function App() {
  const retriveTasks = JSON.parse(localStorage.getItem('tasks'))
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState(retriveTasks)
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  return (
    <taskContext.Provider value={{ value, setTasks, tasks, setValue }}>
      <div className="container">
        <h1>Tasks : </h1>
        <InputTask />
        <TasksList />
      </div>
    </taskContext.Provider>

  );
}

export default App;
