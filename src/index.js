import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
