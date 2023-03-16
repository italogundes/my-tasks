import { useEffect, useRef, useState } from 'react';
import './App.css';
import TableTasks from './components/TableTasks';
import {BsPlusSquare} from 'react-icons/bs';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const inputTask = useRef();

  useEffect(() => {
    const tasksLocal = JSON.parse(localStorage.getItem('tasks'));
    if(tasksLocal.length !== 0) {
    setTaskList(tasksLocal);
    }
  }, []);

  useEffect(() => {
    if(taskList.length !== 0) {
      localStorage.setItem('tasks', JSON.stringify(taskList));
    }
  },[taskList]);
  

  function handleSubmit(event) {
    event.preventDefault();
    const id = taskList.length + 1;
    setTaskList([...taskList, {
      id: id,
      task: task,
      complete: false
    }]);
    setTask('');
    inputTask.current.focus();
  }

  /*function changeInput({target}){
    const {id, value} = target;
    setTask({...task, [id]:value}); //outra forma de pegar valor de um input
  }*/

  
  return (
    <div className="App">
      <h1>my tasks</h1>
      <form onSubmit={handleSubmit} className='input-content'>
        <input 
        ref={inputTask} 
        id='descricao' 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder='Nova Tarefa'/> 
        <button className='btn-adicionar'><BsPlusSquare/></button>
      </form>
      <TableTasks taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
