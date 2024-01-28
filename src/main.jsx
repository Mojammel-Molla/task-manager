import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AllTasks from './data/AllTasks.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllTasks>
      <App />
    </AllTasks>
  </React.StrictMode>
);
