import { useEffect, useRef, useState } from 'react';
import './App.css';
import TableTasks from './components/TableTasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const inputTask = useRef();

  useEffect(() => {
    console.log(tasks);
    localStorage.setItem('tasks', tasks);
  },[tasks])
  

  function handleSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
    inputTask.current.focus();
  }

  function changeInput({target}){
    setTask(target.value);
  }

  
  return (
    <div className="App">
      <h1>my tasks</h1>
      <form onSubmit={handleSubmit} className='input-content'>
        <input ref={inputTask} onChange={changeInput} value={task} type="text" placeholder='Nova Tarefa'/> <button className='btn-adicionar'>+</button>
      </form>
      <TableTasks tasks={tasks}/>
    </div>
  );
}

export default App;
