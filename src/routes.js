import React from 'react';
import { Router, Route } from 'react-router';

// Components
import App from './components/App';
import Incidents from './components/Incidents';

// Layouts
import Main from './layouts/Main';

const Routes = (props) => (
  <Router {...props}>
    <Route component={Main}>
      <Route path="/" component={App} />
      <Route path="/incidents" component={Incidents} />
    </Route>
  </Router>
);

export default Routes;