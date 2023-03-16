import React, { useEffect, useRef } from 'react'
import {BsTrash3Fill} from 'react-icons/bs';

const TableTasks = ({taskList, setTaskList}) => {
  const checkTask = useRef();
  const descTask = useRef();

  useEffect(() => {
    if(taskList.length !== 0) {
      localStorage.setItem('tasks', JSON.stringify(taskList));
    }
  },[taskList]);

  const handleCheck = (id) => {

    let list = taskList.map((task) => { // faz um map devido a necessidade de retornar uma nova lista com valor alterado
      let item = {}; //objeto vazio para receber novos valores
      if(task.id === id) {
        item = {...task, complete: !task.complete};
      } else {
        item = {...task};
      }
      return item;
    });

    setTaskList(list);
    
  }

  const deletTask = (id) => {
    let newList = taskList.filter((task) => (task.id !== id));
    setTaskList(newList);
  };


  return (
    <div className='table-content'>
      
      <table style={{border: '1px solid black'}}>
        <thead>
          <tr>
            <th>Feito?</th>
            <th>Descrição</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
        {taskList.map((task, index) => {
          return <tr key={index}>
            <td>
              <input 
              type="checkbox" 
              value={task.complete} 
              id={task.id}
              ref={checkTask} 
              onChange={() => handleCheck(task.id)}
              checked={task.complete ? true : false}
              />
              </td>
            <td>
              <label 
              ref={descTask} 
              style={{textDecoration: task.complete && "line-through"}}
              >
              {task.task}
              </label>
            </td>
            <td><button id='btnDelete' onClick={() => deletTask(task.id)}><BsTrash3Fill/></button></td>
          </tr>
        })}
        
        </tbody>
      </table>
    </div>
  )
}

export default TableTasks;
