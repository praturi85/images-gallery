import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
const a = true;
root.render(
  <React.StrictMode>
    {a ? <App /> : <h1>hello from JSX</h1>}
    </React.StrictMode>
);
