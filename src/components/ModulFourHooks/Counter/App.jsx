import { useState, useEffect } from 'react';

// як приклад послідовності запису
export default function App() {
  const [countarA, setcountarA] = useState(0);

  const handleCounterAIncrement = () => {
    setcountarA(prevState => prevState + 1);
  };

  const [countarB, setcountarB] = useState(0);

  const handleCounterBIncrement = () => {
    setcountarB(prevState => prevState + 1);
  };

  useEffect(() => {
    const total = countarA + countarB;
    document.title = `Всього кліків ${total}`;
  }, [countarA, countarB]);

  return (
    <div>
      <button type="button" onClick={handleCounterAIncrement}>
        клікнули countarA {countarA} раз
      </button>
      <button type="button" onClick={handleCounterBIncrement}>
        клікнули countaB {countarB} раз
      </button>
    </div>
  );
}
