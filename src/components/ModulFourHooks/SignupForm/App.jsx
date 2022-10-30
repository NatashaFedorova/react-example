import { useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

const App = () => {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    window.localStorage.setItem('email', JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    window.localStorage.setItem('password', JSON.stringify(password));
  }, [password]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('email:', email, 'password:', password);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" onChange={handleChange} value={email} />
      </label>
      <label>
        Password
        <input type="password" name="password" onChange={handleChange} value={password} />
      </label>

      <button type="submit">submit</button>
    </form>
  );
};

export default App;

// ===============================================================
// приклад без викоритсання кастомніх хуків (з використанням в діючому коді)
// const [email, setEmail] = useState(() => JSON.parse(window.localStorage.getItem('email')) ?? '');
// const [password, setPassword] = useState(
//   () => JSON.parse(window.localStorage.getItem('password')) ?? ''
// );
// useEffect(() => {
//   window.localStorage.setItem('email', JSON.stringify(email));
// }, [email]);
// useEffect(() => {
//   window.localStorage.setItem('password', JSON.stringify(password));
// }, [password]);
// ==============================================================

// ================================================================
// при такому записі , перевірка буде проводитися кожний рендер
//   const [email, setEmail] = useState(JSON.parse(window.localStorage.getItem('email')) ?? '');
// ---------
// якщо використовувати lazy state initialization (лінива ініціалізація стану)
// тоді перевірка буде тільки на першому рендері, а потім повністю її проігнорує
// const [email, setEmail] = useState(() => JSON.parse(window.localStorage.getItem('email')) ?? '');
// ==============================================================

// ===============================================================
//   що там у  useState()
//   const inputState = useState('');
//   console.log(inputState); // ['', ƒ]
// ===============================================================

//================================================================
//   для кожного input своя функція, але можна і одну використовувати з switch
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = e => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = e => {
//     setPassword(e.target.value);
//   };
//  <input type="email" name="email" onChange={handleEmailChange} value={email} />
//  <input type="password" name="password" onChange={handlePasswordChange} value={password} />;
// ===============================================================

// =====================================================================
// приклад нижче переводимо на хуки вище
// import { Component } from 'react';
// class App extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//     this.setState({ email: '', password: '' });
//   };

//   render() {
//     return (
//       <form autoComplete="off" onSubmit={this.handleSubmit}>
//         <label>
//           Email
//           <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </label>
//         <button type="submit">submit</button>
//       </form>
//     );
//   }
// }
// export default App;
