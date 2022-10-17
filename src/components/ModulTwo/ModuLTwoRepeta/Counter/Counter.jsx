import React from 'react';
import PropTypes from 'prop-types';
import { Control } from './Control/Control';

class Counter extends React.Component {
  static defaultProps = {
    initualValue: 0,
  };

  state = {
    value: this.props.initualValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <span>{value}</span>
        <Control onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
      </div>
    );
  }
}

Counter.propTypes = {
  initualValue: PropTypes.number.isRequired,
};

export default Counter;

// ============================================================================
// приклад інлайн колбеку (this - екземпляр класу)
//   <button type="button" onClick={() => console.log('Зменшити')}></button>
// ============================================================================

// ============================================================================
// Як визначити this (використовуємо стрілочну функцію)
//   handleIncrement () {
//     console.log('Збільшити');
//     console.log(this); // undefined
//   };
// ===========
// handleIncrement = () => {
//   console.log('Збільшити');
//   console.log(this); // екземпляр класу
// };
// ============================================================================

// ============================================================================
// НЕ можливо відстежит елемент на якому виникла подія
// handleIncrement = e => {
//   setTimeout(() => {
//     console.log(console.log(e.target)); // undefined
//   }, 1000);
// };
// ================
// спосід відстежит елемент на якому виникла подія
//   handleIncrement = e => {
//     const target = e.target;
//     setTimeout(() => {
//       console.log(target); // <button type="button">Збільшити на 1</button>
//     }, 1000);
//   };
// =============================================================================

// =============================================================================
//   handleIncrement = e => {
//     console.log('Збільшити');
//     console.log(this);
//     console.log(e); // SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
//     console.log(e.target); // <button type="button">Збільшити на 1</button>
//   };
// =============================================================================

// =============================================================================
// не зручний запис
//   constructor() {
//     super();

//     this.state = {
//       value: 0,
//     };
//   }
// =====================
// запис який аналогічний попередньому, оскільки він, за допомогою Babel, трансформуеться у попередній
// state = {
//   value: 0,
// };
// ===========================================================================

// ===========================================================================
// !!!!!!!!!!!!!!!!!!!! Так змінювати стан елемнта НЕ можна !!!!!!!!!!!!!!!!!!!!!!
//  handleIncrement = () => {
//   this.state.value = 6;
// };
// --------------------------------------------
// для зміни стану НЕ враховуючи передній є setState як об'єкт
// handleIncrement = () => {
//   this.setState({
//     value: 10,
//   });
// };
// ===========================================================================

// ===========================================================================
// для зміни стану ВРАХОВУЮЧИ передній  - setState як стрілочна функція
// де аргументом буде занчення state, яке додасть React самотійно
// handleIncrement = () => {
//   this.setState(prevState => {
//     return { value: prevState.value + 2 };
//   });
// };
// ===========================================================================

// ===========================================================================
// initualValue - це значення передаеться придодаванні компонента <Counter initualValue={10} />
// якщо передано не буде вказується дефолтне значення static defaultProps
// static  записується до state (традиція)
// static defaultProps = {
//   initualValue: 0,
// };

// state = {
//   value: this.props.initualValue,
// };
// ===========================================================================
