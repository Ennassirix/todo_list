import 'bootstrap/dist/css/bootstrap.min.css';
import InputTask from './components/InputTask';
import TasksList from './components/TasksList';
import './App.css'
import {  useState } from 'react';
import {taskContext} from './context/Context'
function App() {
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([])
  return (
    <taskContext.Provider value={{ value, setTasks, tasks, setValue  }}>
      <div className="container">
        <h1>Tasks : </h1>
        <InputTask />
        <TasksList />
      </div>
    </taskContext.Provider>
    
  );
}

export default App;
