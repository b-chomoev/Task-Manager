import './Task.css';
import '../../App';

interface Props {
    name: string;
    onRemove: React.MouseEventHandler;
}

const Task: React.FC<Props> = (props) => {

    return (
        <div className='task-name'>
            <p className='task-text'>{props.name}</p>
            <button onClick={props.onRemove} className='btnDelete'>Delete</button>
        </div>
    );
};

export default Task;