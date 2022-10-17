import './Todo.css';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <p className="TodoList__text">{text}</p>
      <button type="button" onClick={onDeleteTodo}>
        <DeleteIcon width={16} height={16} />
      </button>
    </>
  );
};

export default Todo;
