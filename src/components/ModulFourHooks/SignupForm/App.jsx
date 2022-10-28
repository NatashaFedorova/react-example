import { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <form autoComplete="off">
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
