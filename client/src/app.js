import React from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/Game.jsx'

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render(<Game/>, targetDiv);
});
