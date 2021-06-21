import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Contacts from '../pages/Contacts';
import AddContact from '../pages/AddContact';
import View from '../pages/View';
import { Paths } from './constants';

const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={Paths.contacts} component={Contacts} />
          <Route exact path={`${Paths.view}/:contactId`} component={View} />
          <Route exact path={`${Paths.add}`} component={AddContact} />
          {/* <Route exact path={`${Paths.edit}/:contactId`}></Route> */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
