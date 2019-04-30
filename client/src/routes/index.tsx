import React from 'react';
import { Switch, Route } from "react-router-dom";

import { LoginPage } from 'pages/login';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={LoginPage} />
    </Switch>
  </div>
)

export default routes