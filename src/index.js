import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// App модуля 2
// import { App } from 'components/ModulTwo/App';

// App модуля 3
import { App } from 'components/ModulThree/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
