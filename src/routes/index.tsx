import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn/Index';
import SignUp from '../pages/SignUp/Index';

import Dashboard from '../pages/Dashboard/';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate/>
  </Switch>
);

export default Routes;