import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // root는 index.html로 뿌려줌.
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


