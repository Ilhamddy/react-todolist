import React from 'react'
import { MdDelete } from 'react-icons/md'

const Taskitem = ({ task, deleteTask, toogleCheck }) => {
    return (
        <li className='items'>
            <div className='item-text'>
                <input type="checkbox" checked={task.checked} onChange={() => toogleCheck(task.taskName)} />
                <span className={task.checked ? 'isChecked' : ''}> {task.taskName}</span>
            </div>
            <MdDelete className="delete-icon "
                onClick={() => deleteTask(task.taskName)}
            />
        </li>
    )
}

export default Taskitem