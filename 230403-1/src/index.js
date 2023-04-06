import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './apps/App02';
//import App from './App;
import './index.css';
//import App from './apps/App01.js';
//import App from './apps/App02.js';
//import App from './apps/App03_props.js';
//import App from './apps/App03_props copy.js';
//import App from './apps/App04.js'
//import App from './apps/App04 copy.js'
//import App from './apps/App05.js'
//import App from './apps/App05 copy.js'
import App from './apps/no01.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
