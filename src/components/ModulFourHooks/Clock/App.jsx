import { useState, useEffect, useRef } from 'react';

const App = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);
  //   console.log(intervalId); // {current: null}

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('Ця функція очищення перед наступним викликом useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    console.log(intervalId.current);
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <p>Поточний час: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        stop
      </button>
    </div>
  );
};

export default App;

// export default function App() {
//   const [time, setTime] = useState(() => new Date());
//   const intervalId = useRef(null);

//   useEffect(() => {
//     intervalId.current = setInterval(() => {
//       console.log('Это интервал каждые 2000ms ' + Date.now());
//       setTime(new Date());
//     }, 2000);

//     return () => {
//       console.log('Это функция очистки перед следующим вызовом useEffect');
//       stop();
//     };
//   }, []);

//   const stop = () => {
//     clearInterval(intervalId.current);
//   };

//   return (
//     <div>
//       <p>Текущее время: {time.toLocaleTimeString()}</p>
//       <button type="button" onClick={stop}>
//         Остановить
//       </button>
//     </div>
//   );
// }
