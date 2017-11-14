import React from 'react';
import { Router, Route } from 'react-router';

// Components
import App from './components/App';
import Incidents from './components/Incidents';
import Incident from './components/Incident';

// Layouts
import Main from './layouts/Main';

const Routes = (props) => (
  <Router {...props}>
    <Route component={Main}>
      <Route path="/" component={App} />
      <Route path="/incidents" component={Incidents} />
      <Route path="incidents/:incident_key" component={Incident}/>
    </Route>
  </Router>
);

export default Routes;