import React from 'react';
import './TodoList.css';

export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => {
        return (
          <li key={id} className="TodoList__item">
            <input type="checkbox" checked={completed} onChange={() => onToggleCompleted(id)} />
            <p className="TodoList__text">{text}</p>
            <button type="button" onClick={() => onDeleteTodo(id)}>
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
};
