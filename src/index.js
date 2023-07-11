import React from 'react';
import { render } from 'react-dom';
import {App} from './App.jsx';

// TODOS for portfolio site:
// - update resume; put resume behind a Captcha
// - re-write bio; update picture
// - make skills section smaller and change colors automatically
// - remove contact info
// - make particle effects better and less laggy
// - re-think styles and colors
const renderApp = () => {
  const root = document.getElementById('root');
  render(<App />, root);
};

document.addEventListener('DOMContentLoaded', renderApp);
