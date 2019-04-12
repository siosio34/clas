import React from 'react';
import { Route, Switch } from 'react-router';

import LoginPage from 'pages/login';

const routes = (
    <div>
        <Switch>
            <Route path="/login" component={LoginPage} />
        </Switch>
    </div>
    )
    
export default routes;