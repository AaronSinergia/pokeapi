import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StateComp from './hooks/context/StateComp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateComp>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateComp>
);
