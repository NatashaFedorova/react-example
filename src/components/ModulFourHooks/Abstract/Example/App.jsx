// import { useState, useEffect, ES } from 'react';

//====================== Хук useState============================
// const App = () => {
//   const [value, setValue] = useState(0);
//   return (
//     <div>
//       {value}
//       <button type="button" onClick={() => setValue(value + 1)}>
//         Increment value by 1
//       </button>
//     </div>
//   );
// };

// ===================== Хук useEffect==========================
// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${value} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {value} times</p>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </div>
//   );
// };

// =====================Аналог componentDidMount==========================
// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log('Mouting phase: same when componentDidMount runs');
//   }, []);

//   return <button onClick={() => setValue(value + 1)}>{value}</button>;
// };

// =====================Аналог componentDidMount==========================
// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log(value);
//     console.log('Updating phase: same when componentDidUpdate runs');
//   }, [value]);

//   return <button onClick={() => setValue(value + 1)}>{value}</button>;
// };

// =====================Список залежностей==============================
// const App = () => {
//   const [firstValue, setFirstValue] = useState(0);
//   const [secondValue, setSecondValue] = useState(0);

//   // ❌ Погано. ESLint покаже попередження
//   useEffect(() => {
//     console.log(firstValue + secondValue);
//   }, [firstValue]);

//   // ✅ Добре. Вказані всі залежності, що використовуються всередині ефекту
//   useEffect(() => {
//     console.log(firstValue + secondValue);
//   }, [firstValue, secondValue]);

//   return (
//     <>
//       <button onClick={() => setFirstValue(value + 1)}>First: {value}</button>
//       <button onClick={() => setSecondValue(value + 1)}>Second: {value}</button>
//     </>
//   );
// };

// =====================Аналог componentWillUnmount=================
// const App = () => {
//   useEffect(() => {
//     console.log('Mounting phase: same when componentDidMount runs');

//     return () => {
//       console.log('Unmounting phase: same when componentWillUnmount runs');
//     };
//   }, []);

//   return null;
// };

// ==================Декілька ефектів===============================
// const App = () => {
//   // 1. Run effect only on mount to init some library
//   useEffect(() => {
//     initThirdPartyLibrary();
//   }, []);

//   // 2. Run effect only when username prop changes
//   useEffect(() => {
//     fetchUser(username);
//   }, [username]);

//   // 3. Run effect on value prop change
//   useEffect(() => {
//     // Do stuff when value prop changes
//   }, [value]);

//   // 4. Run effect on isLoggedIn state change
//   useEffect(() => {
//     // Do stuff when isLoggedIn state changes
//   }, [isLoggedIn]);

//   // 5. Run effect on mount and clean up on unmount
//   useEffect(() => {
//     const handleKeyDown = e => console.log('keydown event: ', e);
//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);
// };

// ===================Власні хуки (приклад 1)==========================
// const useToggle = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const open = () => setIsOpen(true);
//   const close = () => setIsOpen(false);
//   const toggle = () => setIsOpen(isOpen => !isOpen);

//   return { isOpen, open, close, toggle };
// };

// const ComponentA = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <ModalA isOpen={isOpen} onClose={close} />
//     </>
//   );
// };

// const ComponentB = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <ModalB isOpen={isOpen} onClose={close} />
//     </>
//   );
// };
// якщо в різних файлах
// export const useToggle....
// import { useToggle } from 'path/to/hooks/useToggle.js';
// ============================================================

// ================Власні хуки(приклад 2)=====================
// const useToggle = (initialState = false) => {
//   const [isOpen, setIsOpen] = useState(initialState);
//   const open = () => setIsOpen(true);
//   const close = () => setIsOpen(false);
//   const toggle = () => setIsOpen(isOpen => !isOpen);

//   return { isOpen, open, close, toggle };
// };

// const MyComponent = () => {
//   const { isOpen, open, close } = useToggle(true);

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <Modal isOpen={isOpen} onClose={close} />
//     </>
//   );
// };

// ========================Життєвий цикл рефа=======================
// import { useState, useEffect, useRef } from 'react';

// const App = () => {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   // Буде null на першому рендері
//   // і посиланням на DOM-елемент всі наступні
//   console.log(btnRef.current);

//   useEffect(() => {
//     // Ефект виконується після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log(btnRef.current);
//   });

//   const handleClick = () => {
//     // Кліки будуть після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log(btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Оновіть значення, щоб ініціювати повторне відтворення
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Кнопка з реф
//       </button>
//     </>
//   );
// };

// ========================Простий відеоплеєр=======================
// import { useRef } from 'react';

// const Player = ({ source }) => {
//   const playerRef = useRef();
//   const play = () => playerRef.current.play();
//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video ref={playerRef} src={source}>
//         На жаль, ваш браузер не підтримує вбудовані відео.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };

// ========================Перенаправлення рефів=======================
// import { forwardRef, useRef, useEffect } from 'react';

// const CustomButton = forwardRef((props, ref) => <button ref={ref}>{props.children}</button>);

// const App = () => {
//   const btnRef = useRef();

//   useEffect(() => btnRef.current.focus(), []);

//   return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
// };

// export default App;
