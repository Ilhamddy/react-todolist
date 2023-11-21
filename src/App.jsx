import './App.css'
import Taskinput from './component/taskinput'
import React, { useState } from 'react'
import Taskitem from './component/taskitem';
import Stats from './component/Stats';


function App() {
  const [ToDolist, setToDolist] = useState([]);

  console.log(ToDolist);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDolist([...ToDolist, newTask])
  };

  function deleteTask(deleteTaskName) {
    setToDolist(ToDolist.filter(task => task.taskName !== deleteTaskName));
  }

  function toogleCheck(taskName) {
    setToDolist((prevToDolist) =>
      prevToDolist.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      ),
    );
  }
  return (
    <>
      <div className='container'>
        <h1 className='text-white'> To Do List</h1>
        <Taskinput addTask={addTask} />
        <div className='toDolist'>
          <ul className='list-items'>
            <br />
            {ToDolist.map((task, key) => (
              <Taskitem task={task} key={key}
                deleteTask={deleteTask}
                toogleCheck={toogleCheck} />

            ))}
          </ul>


          {ToDolist.length === 0 ? (
            <p className='notify'>Thankyou!! Input use apps</p>
          ) : null}
        </div>
        <h2 className='text justify-center text-center'> devIlhamddy</h2>
      </div>
      {/* <Stats ToDolist={ToDolist} /> */}
    </>
  )
}

export default App
