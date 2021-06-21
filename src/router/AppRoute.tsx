import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Contacts from '../pages/Contacts';
import Editor from '../pages/Editor';
import View from '../pages/View';
import { Paths } from './constants';

const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={Paths.contacts} component={Contacts} />
          <Route exact path={`${Paths.view}/:contactId`} component={View} />
          <Route exact path={`${Paths.add}`}>
            <Editor />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
