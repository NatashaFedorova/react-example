import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// App модуля 2===========================================================
// import { App } from 'components/ModulTwo/App';

// App модуля 3 (форма, годинник, модалка, todoList)======================
// import { App } from 'components/ModulThree/App/App';

// App модуля 3 (Player)==================================================
// import App from 'components/ModulThree/Player/App';

// App модуля 3 (Reader)==================================================
import App from 'components/ModulThree/Reader/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
