import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

const renderApp = () => {
  const root = document.getElementById('root');
  render(<App />, root);
};

document.addEventListener('DOMContentLoaded', renderApp);
