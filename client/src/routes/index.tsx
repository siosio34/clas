import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { LoginPage } from 'pages/login';

const routes = (
  <div>
    <Router>
      <Route exact path="/" component={LoginPage} />
    </Router>
  </div>
)

export default routes