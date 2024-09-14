import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // If you are using a global stylesheet

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
