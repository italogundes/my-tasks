import { useState, useEffect, useRef } from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './css/AreaTask.module.css';
import TableTasks from './TableTasks';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

const AreaTasks = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const inputTask = useRef();

  useEffect(() => {
    const tasksLocal = JSON.parse(localStorage.getItem('tasks'));
    if (tasksLocal !== null) {
      setTaskList(tasksLocal);
    } else {
      setTaskList([]);
    }
  }, []);

  useEffect(() => {
    if (taskList.length !== 0) {
      localStorage.setItem('tasks', JSON.stringify(taskList));
    }
  }, [taskList]);

  function handleSubmit(event) {
    event.preventDefault();
    const id = taskList.length + 1;
    setTaskList([
      ...taskList,
      {
        id: id,
        task: task,
        complete: false,
      },
    ]);
    setTask('');
    inputTask.current.focus();
  }

  const onChange = (event) => {
    setTask(event.target.value);
  };

  /*function changeInput({target}){
    const {id, value} = target;
    setTask({...task, [id]:value}); //outra forma de pegar valor de um input
  }*/

  return (
    <div className={styles.areaTasksContainer}>
      <Header />
      <div className={styles.areaTasks}>
        <h1>my tasks</h1>
        <form onSubmit={handleSubmit} className={styles.formTask}>
          <Input
            name="descricao"
            id="descricao"
            type="text"
            value={task}
            placeholder="Nova Tarefa"
            onChange={onChange}
            inputtask={inputTask}
          />
          <Button>
            <BsPlusSquare />
          </Button>
        </form>
        <TableTasks taskList={taskList} setTaskList={setTaskList} />
      </div>
      <Footer />
    </div>
  );
};

export default AreaTasks;
