import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom' for CRA, 'react-dom/client' for Vite
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);