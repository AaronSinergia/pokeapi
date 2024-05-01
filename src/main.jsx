import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StateComp from './context/StateComp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateComp>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateComp>
);
