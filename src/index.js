import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// App модуля 2===========================================================
// import { App } from 'components/ModulTwo/App';

// App модуля 3 (форма, годинник, модалка, todoList)======================
// import { App } from 'components/ModulThree/App/App';

// App модуля 3 (Player)==================================================
// import App from 'components/ModulThree/Player/App';

// App модуля 3 (Reader)==================================================
// import App from 'components/ModulThree/Reader/App';

// App модуля 3 (Pokemon)==================================================
// import App from 'components/ModulThree/Pokemon/App';

// App модуля 3 (Collection Of Materials)==================================================
// import App from 'components/ModulThree/CollectionOfMaterials/App';

// App модуля 3 (Load more)==================================================
// import App from 'components/ModulThree/LoadMore/App';

// App модуля 3 (HTTP-запити)==================================================
// import App from 'components/ModulThree/Query/App';

// Модуль 4 (Кастомний компонент провайдера. Хуки)=========================
// import { App } from 'components/ModulFourHooks/Abstract/UserRegistration/App';
// import { UserProvider } from 'components/ModulFourHooks/Abstract/UserRegistration/userContext';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/Abstract/Example/App';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/SignupForm/App';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/ColorPicker/App';
// import options from './data/colorPickerOptions.json';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App options={options} />
//   </React.StrictMode>
// );

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/Counter/App';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/Clock/App';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/SkipEffectOnFirstRender/App.jsx';

// App модуля 4 (Хуки. useEffect)==================================================
// import App from 'components/ModulFourHooks/Pokemon/App';

// App модуля 4 (Хуки. useReducer)==================================================
// import App from 'components/ModulFourHooks/CounterUseReducer/App';

// App модуля 4 (Хуки. useMemo)==================================================
// import App from 'components/ModulFourHooks/Friends/App';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/News/App';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/UserMenu/App.jsx';
// import AuthProvider from './context/AuthProvider';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/LoadMore/App';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/ModalExample1/App';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/ModalExample2/App';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/NewsPortalVebinar/App';

// App модуля 4 (Хуки)==================================================
// import App from 'components/ModulFourHooks/QueryHooks/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </React.StrictMode>
// );

// App модуля 5 (Routing. Abstract)==================================================
import App from './ModulFiveRouting/Shop/components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
