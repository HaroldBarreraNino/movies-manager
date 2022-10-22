import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeParse } from  '@parse/react';
import { BrowserRouter as Router } from 'react-router-dom';

initializeParse(
  'http://localhost:1337/parse', // e.g. YOUR_APP_NAME.b4a.io
  'MoviesManager'
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

