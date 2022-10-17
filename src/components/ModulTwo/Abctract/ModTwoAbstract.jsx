// import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { App } from 'components/App';

// ======================Події. Лічильник==================================
// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button">Increment by {step}</button>
//         <button type="button">Decrement by {step}</button>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <Counter step={5} />
//   </React.StrictMode>
// );

// ======================Анонімні (інлайн) колбеки============================
// class Counter extends Component {
//   /* ... */

//   handleIncrement(evt) {
//     console.log('Increment button was clicked!', evt); // працює
//     console.log('this.props: ', this.props); // Error: cannot read props of undefined
//   }

//   handleDecrement(evt) {
//     console.log('Decrement button was clicked!', evt); // працює
//     console.log('this.props: ', this.props); // Error: cannot read props of undefined
//   }

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Counter step={5} />
//   </React.StrictMode>
// );

// ❌========Прив'язка під час передачі колбека=============❌
// ❌ Погано
// class Counter extends Component {
//   /* ... */

//   handleIncrement(evt) {
//     // ...
//   }

//   handleDecrement(evt) {
//     // ...
//   }

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button" onClick={this.handleIncrement.bind(this)}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement.bind(this)}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Counter step={5} />
//   </React.StrictMode>
// );

// ================ Прив'язка в конструкторі===================
// ✅ Непогано
// class Counter extends Component {
//   /* ... */

//   constructor() {
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
//     this.handleDecrement = this.handleDecrement.bind(this);
//   }

//   handleIncrement(evt) {
//     // ...
//   }

//   handleDecrement(evt) {
//     // ...
//   }

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Counter step={5} />
//   </React.StrictMode>
// );

// ================ Публічні властивості класу===================
// ✅ Добре
// class Counter extends Component {
//   /* ... */

//   handleIncrement = evt => {
//     console.log('Increment button was clicked!', evt); // працює
//     console.log('this.props: ', this.props); // працює
//   };

//   handleDecrement = evt => {
//     console.log('Decrement button was clicked!', evt); // працює
//     console.log('this.props: ', this.props); // працює
//   };

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Counter step={5} />
//   </React.StrictMode>
// );

// ================ Внутрішній стан компонента===================
// Стан оголошується в конструкторі,
// оскільки це перше, що відбувається, коли створюється екземпляр класу.
// class Counter extends Component {
//   constructor() {
//     super();

//     this.state = {
//       value: 0,
//     };
//   }

//   /* ... */

//   render() {
//     return (
//       <div>
//         <span>{this.state.value}</span>
//         {/* ... */}
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Counter step={5} />
//   </React.StrictMode>
// );

// ================ Початковий стан від props ===================
// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   /* ... */
// }

// ================ Зміна стану компонента ===================
// class Toggle extends Component {
//   state = { isOpen: false };

//   show = () => this.setState({ isOpen: true });

//   hide = () => this.setState({ isOpen: false });

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <>
//         <button onClick={this.show}>Show</button>
//         <button onClick={this.hide}>Hide</button>
//         {isOpen && children}
//       </>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Toggle />
//   </React.StrictMode>
// );

// ================ setState з функцією (приклад 1)===================
// class Toggle extends Component {
//   state = { isOpen: false };

//   toggle = () => {
//     this.setState(state => ({ isOpen: !state.isOpen }));
//   };

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <div>
//         <button onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</button>
//         {isOpen && children}
//       </div>
//     );
//   }
// }

// ================ setState з функцією (приклад 2)===================
// class Counter extends Component {
//   /* ... */

//   handleIncrement = () => {
//     this.setState((state, props) => ({
//       value: state.value + props.step,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState((state, props) => ({
//       value: state.value - props.step,
//     }));
//   };

//   /* ... */
// }

// =============== Підіймання стану =====================
// Button отримує функцію changeMessage (ім'я пропа),
// яка викликається під час події onClick
// const Button = ({ changeMessage, label }) => (
//   <button type="button" onClick={changeMessage}>
//     {label}
//   </button>
// );

// class App extends Component {
//   state = {
//     message: new Date().toLocaleTimeString(),
//   };

//   // Метод, який будемо передавати в Button для виклику під час кліку
//   updateMessage = evt => {
//     console.log(evt); // Доступний об'єкт події
//     this.setState({
//       message: new Date().toLocaleTimeString(),
//     });
//   };

//   render() {
//     return (
//       <>
//         <span>{this.state.message}</span>
//         <Button label="Change message" changeMessage={this.updateMessage} />
//       </>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ===============Форми. Неконтрольовані елементи====================
// class LoginForm extends Component {
//   handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     const login = form.elements.login.value;
//     const password = form.elements.password.value;
//     console.log(login, password);
//     this.props.onSubmit({ login, password });
//     form.reset();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" name="login" />
//         <input type="password" name="password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <LoginForm onSubmit={values => console.log(values)} />
//   </React.StrictMode>
// );

// ===============Форми. Контрольовані елементи====================
// class App extends Component {
//   state = {
//     inputValue: '',
//   };

//   handleChange = evt => {
//     this.setState({ inputValue: evt.target.value });
//   };

//   render() {
//     const { inputValue } = this.state;
//     return <input type="text" value={inputValue} onChange={this.handleChange} />;
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ===============Форми. Складні форми====================
// // Створимо форму реєстрації.
// class SignUpForm extends Component {
//   state = {
//     login: '',
//   };

//   // Відповідає за оновлення стану
//   handleChange = e => {
//     this.setState({ login: e.target.value });
//   };

//   // Викликається під час відправлення форми
//   handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(`Signed up as: ${this.state.login}`);

//     // Проп, який передається формі для виклику під час сабміту
//     this.props.onSubmit({ ...this.state });
//   };

//   render() {
//     const { login } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input type="text" placeholder="Enter login" value={login} onChange={this.handleChange} />
//         </label>

//         <button type="submit">Sign up as {login}</button>
//       </form>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <SignUpForm onSubmit={values => console.log(values)} />
//   </React.StrictMode>
// );

// ------------------------------------------------------
// Додамо поля для email і password, а заразом використаємо дуже корисний патерн
//  для callback - функції, що передається в onChange.
// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.
// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
// };

// class SignUpForm extends React.Component {
//   state = { ...INITIAL_STATE };

//   // Для всіх інпутів створюємо один обробник
//   // Розрізняти інпути будемо за атрибутом name
//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { login, email, password } = this.state;
//     console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { login, email, password } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             name="login"
//             value={login}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Sign up as {login}</button>
//       </form>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <SignUpForm onSubmit={values => console.log(values)} />
//   </React.StrictMode>
// );

// ===============Генерація Id елементів форми====================
// Можна використовувати будь-який пакет для генерації унікальних рядків
// import { nanoid } from 'nanoid';

// class Form extends React.Component {
//   loginInputId = nanoid();

//   render() {
//     return (
//       <form>
//         <label htmlFor={this.loginInputId}>Login</label>
//         <input type="text" name="login" id={this.loginInputId} />
//       </form>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Form />
//   </React.StrictMode>
// );

// ===========================Чекбокси==========================
// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
//   agreed: false,
// };

// class SignUpForm extends React.Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   handleChange = evt => {
//     const { name, value, type, checked } = evt.target;
//     // Якщо тип елемента – checkbox, беремо значення checked,
//     // в іншому випадку – value
//     this.setState({ [name]: type === 'checkbox' ? checked : value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { login, email, password, agreed } = this.state;
//     console.log(`Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`);

//     /* ... */
//   };

//   render() {
//     const { login, email, password, agreed } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         {/* ... */}
//         <label>
//           Agree to terms
//           <input type="checkbox" checked={agreed} onChange={this.handleChange} />
//         </label>

//         <button type="submit" disabled={!agreed}>
//           Sign up as {login}
//         </button>
//       </form>
//     );
//   }
// }

// ===========================Радіокнопки==========================
// Використовуємо Enumerable, щоб не створювати антипатерн "магічні рядки"

// const Gender = {
//   MALE: "male",
//   FEMALE: "female",
// };

// const INITIAL_STATE = {
//   login: "",
//   email: "",
//   password: "",
//   agreed: false,
//   gender: null,
// };

// class SignUpForm extends React.Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   /*... */

//   render() {
//     const { login, email, password, agreed, gender } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         {/* ... */}

//         <section>
//           <h2>Choose your gender</h2>
//           <label>
//             Male
//             <input
//               type="radio"
//               checked={gender === Gender.MALE}
//               name="gender"
//               value={Gender.MALE}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             Female
//             <input
//               type="radio"
//               checked={gender === Gender.FEMALE}
//               name="gender"
//               value={Gender.FEMALE}
//               onChange={this.handleChange}
//             />
//           </label>
//         </section>

//         <button type="submit" disabled={!agreed}>
//           Sign up as {login}
//         </button>
//       </form>
//     );
//   }
// }

// ===========================Селект==========================
// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
//   agreed: false,
//   gender: null,
//   age: '',
// };

// class SignUpForm extends React.Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   /* ... */

//   render() {
//     const { login, email, password, agreed, gender, age } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         {/* ... */}

//         <label>
//           Choose your age
//           <select name="age" value={age} onChange={this.handleChange}>
//             <option value="" disabled>
//               ...
//             </option>
//             <option value="18-25">18-25</option>
//             <option value="26-35">26-35</option>
//             <option value="36+">36+</option>
//           </select>
//         </label>

//         <button type="submit" disabled={!agreed}>
//           Sign up as {login}
//         </button>
//       </form>
//     );
//   }
// }
