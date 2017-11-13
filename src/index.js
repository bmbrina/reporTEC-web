import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';
import './css/base.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Routes history={ browserHistory } />,
  document.getElementById('root')
)
registerServiceWorker();