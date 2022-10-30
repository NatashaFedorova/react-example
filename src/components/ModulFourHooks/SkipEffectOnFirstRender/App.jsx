import { useState, useEffect, useRef } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  // НЕ ПРАЦЮЄ !!!!???
  useEffect(() => {
    if (isFirstRender.current) {
      console.log('isFirstRender');
      isFirstRender.current = false;
      return;
    }

    console.log(`Виконується useEffect - ${Date.now()}`);
  });

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <p>useEffect цього компонента не виконується на першому рендері</p>
    </div>
  );
};
export default App;

// ========================================================
// приклад, коли пропескається перший рендер з fetch()
// useEffect(() => {
//   if (inputValue === '') {
//     return;
//   }
// });
// ========================================================
