import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from './Contexts/BudgetsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BudgetsProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </BudgetsProvider>
  </React.StrictMode>
);