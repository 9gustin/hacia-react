import React from 'react';
import { Route, Switch } from 'wouter';

import { ROUTES } from './routes';

const Router = () => (
  <Switch>
    {ROUTES.map((route) => (
      <Route path={route.path}>
        <route.component />
      </Route>
    ))}
  </Switch>
);

export default Router;
