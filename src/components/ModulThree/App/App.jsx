import React, { Component } from 'react';
import { TodoList } from '../TodoList';
import TodoEditor from '../TodoEditor';
import { nanoid } from 'nanoid';
// import Form from './Form';
import Filter from '../Filter';
import Modal from '../Modal';
// import Clock from './Clock';
// import tabs from '../../tabs.json';
import { ReactComponent as AddIcon } from '../../../icons/add.svg';
import { ReactComponent as CloseIcon } from '../../../icons/close.svg';

import './App.css';
import initialTodos from '../../../data/initialTodos.json';
// import Tabs from './Tabs';
import IconBtn from '../IconBtn';

export class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
    showClock: true,
  };
  componentDidMount() {
    // console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    // console.log(parsedTodos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    const prevTodos = prevState.todos;
    const nextTodos = this.state.todos;
    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    // можна закривати модалку по дадаванню Todo
    // (менше пов'язаного коду із додванням Todo, аде більше перевірок)
    // працює погано!!!!!
    if (nextTodos.length > prevTodos.length) {
      this.toggleModal();
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

    // можна закривати модалку по дадаванню Todo (більше пов'язаного коду із додванням Todo)
    // this.toggleModal();
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
        {/* <Tabs items={tabs} />
        <div className="block-clock">
          <button type="button" onClick={this.toggleClock} className="btn-clock">
            Show clock/hide clock
          </button>
          {showClock && <Clock />}
        </div> */}
        {/* <Form onSubmit={this.receiveDataOnSubmit} /> */}
        <div className="todoList">
          <h2>Список завдань</h2>
          <Filter value={filter} onChange={this.changeFilter} />

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
        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}
        <IconBtn onClick={this.toggleModal} aria-label="Додати задачу">
          <AddIcon width={40} height={40} />
        </IconBtn>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button
              type="button"
              onClick={this.toggleModal}
              className="btn-close"
              aria-label="Закрити модальне вікно"
            >
              <CloseIcon width={16} height={16} />
            </button>
            <TodoEditor onSubmit={this.addTodo} />
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
