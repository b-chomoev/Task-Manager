import './Task.css';
import React from "react";

interface Props {
    name: string;
}

const Task: React.FC<Props> = (props) => {
    const deleteTask= () => {
        console.log('delete Button clicked');
    }

    return (
        <div className='task-name'>
            <p className='task-text'>{props.name}</p>
            <button onClick={deleteTask} className='btnDelete'>Delete</button>
        </div>
    );
};

export default Task;