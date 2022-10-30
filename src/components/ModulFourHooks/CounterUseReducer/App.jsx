import { useReducer } from 'react';

// type, payload - це назви не обовязкові, а загальноприйняті

function init(initialState) {
  return initialState + 100;
}

function countReducer(prevState, action) {
  //   console.log(action); // {type: 'increment', payload: 1}
  switch (action.type) {
    case 'increment':
      return prevState + action.payload;
    case 'decrement':
      return prevState - action.payload;

    default:
      throw new Error(`unsuported action type ${action.type}`);
  }
}

export default function App() {
  const [count, dispatch] = useReducer(countReducer, 0, init);

  return (
    <>
      <p>{count}</p>
      <div>
        <button type="button" onClick={() => dispatch({ type: 'increment', payload: 1 })}>
          Збільшити на 1
        </button>
        <button type="button" onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
          Зменшити на 1
        </button>
      </div>
    </>
  );
}

// ==================================================================
// приклад, якщо початкове значення не число, а об'єкт
// function countReducer(prevState, action) {
//   switch (action.type) {
//     case 'increment':
//       return { ...prevState, count: prevState.count + action.payload };
//     case 'decrement':
//       return { ...prevState, count: prevState.count - action.payload };

//     default:
//       throw new Error(`unsuported action type ${action.type}`);
//   }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(
//     countReducer,
//     {
//       count: 0,
//     },
//     init
//   );
//   return (
//     <>
//       <p>{state.count}</p>
//       <div>
//         <button type="button" onClick={() => dispatch({ type: 'increment', payload: 1 })}>
//           Збільшити на 1
//         </button>
//         <button type="button" onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
//           Зменшити на 1
//         </button>
//       </div>
//     </>
//   );
// }
// ==================================================================

// ==================================================================
// init третій аргумент useReducer, приклад викорстання
// function init(initialState) {
//   return { ...initialState, count: initialState.count + 100 };
// }
//   const [state, dispatch] = useReducer(
//     countReducer,
//     {
//       count: 0,
//     },
//     init
//   );
// ==================================================================
