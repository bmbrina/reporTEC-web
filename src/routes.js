import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Incidents from './components/Incidents';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/incidents" component={Incidents} />
  </Router>
);

export default Routes;