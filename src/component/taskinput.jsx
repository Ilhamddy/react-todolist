import React, { useState } from 'react'

export default function Taskinput({ addTask }) {


    const [task, setTask] = useState('');


    console.log(task);
    function handleInputValue(e) {
        setTask(e.target.value);
    }

    function handleAddTask(e) {
        e.preventDefault();
        if (task.trim() === '') return;
        addTask(task);
        setTask('');
    }
    return (
        <div>
            <form className='inputField' onSubmit={handleAddTask}>
                <input type="text" value={task} placeholder='Input List'
                    onChange={handleInputValue} />
                <button>+</button>
            </form>
        </div>
    )
}
