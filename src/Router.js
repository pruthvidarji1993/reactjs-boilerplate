import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';
import PrivateRoute from './app/privateRoutes';
import PublicRoute from './app/publicRoute';

// Route-based code splitting
const Home = lazy(() => import('./views/pages/home'));

const login = lazy(() => import('./views/authentication/login/login'));


class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <PublicRoute exact path='/login' component={login}/>     
          <PrivateRoute exact path='/home' component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
