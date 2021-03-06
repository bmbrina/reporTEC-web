import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';
import './css/application.css';
import './css/alom.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Routes history={ browserHistory } />,
  document.getElementById('root')
)

registerServiceWorker();