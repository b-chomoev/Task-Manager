import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import './index.css'
import {useState} from "react";
import Task from "./components/Task/Task";

const App = () => {
    const [task, setTask] = useState([
        {name: 'Buy milk', id: '1'},
        {name: 'Walk with dog', id: '2'},
        {name: 'Do homework', id: '3'},
    ])

    const taskAdd = () => {
        console.log('Button clicked');
    }

    const deleteTask= (id: number) => {
        const taskCopy = [...task];
        taskCopy.splice(id, 1);
        setTask(taskCopy);
    }

    return (
        <div className='App'>
            <div className='task-form'>
                <AddTaskForm />
                <button onClick={taskAdd} className='btnAdd'>Add Task</button>
            </div>
            <div className='task'>
                {task.map((item, id) => (
                    <Task key={id} name={item.name} onRemove={() => deleteTask(id)} />
                ))}
            </div>
        </div>
    );
};

export default App;