import React, { Component } from 'react';
import { TodoList } from './TodoList';
import TodoEditor from './TodoEditor';
import { nanoid } from 'nanoid';
import Form from './Form';
import Filter from './Filter';
import Modal from './Modal';
import Clock from './Clock';

import './TodoListBlock.css';
import initialTodos from '../../../initialTodos.json';

export class TodoListBlock extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
    showClock: true,
  };
  componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    console.log(parsedTodos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log('App componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      console.log('оновилось todos');
      console.log('prevProps', prevState);
      console.log('this.state', this.state);

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  toggleClock = () => {
    this.setState(({ showClock }) => ({
      showClock: !showClock,
    }));
  };

  render() {
    const { todos, filter, showModal, showClock } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();
    return (
      <div className="Container">
        <div className="block-clock">
          <button type="button" onClick={this.toggleClock} className="btn-clock">
            Show clock/hide clock
          </button>
          {showClock && <Clock />}
        </div>
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
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>Цей текст це контент модалки</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ipsa deserunt quasi
              quod velit sit qui fugiat explicabo esse a veritatis commodi fuga, laborum labore
              debitis doloremque. Quia, vel nulla.
            </p>
            <p>Таким чином модалку можна перевикористовувати</p>
            <button type="button" onClick={this.toggleModal}>
              Закрити модалку
            </button>
          </Modal>
        )}
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
