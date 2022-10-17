import React, { Component } from 'react';
import { TodoList } from './TodoList';
import TodoEditor from './TodoEditor';
import { nanoid } from 'nanoid';
import Form from './Form';
import Filter from './Filter';

import './TodoListBlock.css';
import initialTodos from '../../../../initialTodos.json';

export class TodoListBlock extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const newTodo = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  onToggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      ),
    }));
  };

  receiveDataOnSubmit = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter));
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();
    return (
      <div className="Container">
        <Form onSubmit={this.receiveDataOnSubmit} />
        <h2>Список завдань</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoEditor onSubmit={this.addTodo} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.onToggleCompleted}
        />
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
      </div>
    );
  }
}

// ============================================================
// можна під кожний інпут зробити власну функцію
// handleNameChange = e => {
//   this.setState({ name: e.currentTarget.value });
// };
// handleEmailChange = e => {
//   this.setState({ email: e.currentTarget.value });
// };
// -------------------------------------------------
// можна одну функцію на всі інпути
//  handleChange = e => {
//   const { name, value } = e.currentTarget;
//   this.setState({ [name]: value });
// };
// ============================================================

// ============================================================
// приклад без деструктуризації
// onToggleCompleted = todoId => {
//   this.setState(prevState => ({
//     todos: prevState.todos.map(todo =>
//       todo.id === todoId
//         ? {
//             ...todo,
//             completed: !todo.completed,
//           }
//         : todo
//     ),
//   }));
// };
// -------------------------------------
// onToggleCompleted = todoId => {
//     this.setState(({ todos }) => ({
//       todos: todos.map(todo =>
//         todo.id === todoId
//           ? {
//               ...todo,
//               completed: !todo.completed,
//             }
//           : todo
//       ),
//     }));
//  };
