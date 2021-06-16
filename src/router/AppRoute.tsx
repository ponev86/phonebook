import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Contacts from '../pages/Contacts';
import View from '../pages/View';
import { Paths } from './constants';

const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={Paths.contacts} component={Contacts} />
          <Route exact path={`${Paths.view}/:contactId`} component={View} />
          <Route exact path={`${Paths.edit}/:contactId`} component={View} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
