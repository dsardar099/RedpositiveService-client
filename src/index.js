import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import 'primeflex/primeflex.css';
import "primeicons/primeicons.css"; //icons
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
