import React from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo';

export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => {
        return (
          <li key={id} className="TodoList__item">
            <Todo
              text={text}
              completed={completed}
              onToggleCompleted={() => onToggleCompleted(id)}
              onDeleteTodo={() => onDeleteTodo(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};
