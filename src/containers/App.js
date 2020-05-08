import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import { PrivateRoute } from './../components/privateroute/index';
import { history } from './../reducers/history';
import routes from './../utils/routes';
const App = () => {
  const showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  }
  return (
    <Router history={history}>
      <Switch>
        {showContentMenu(routes)}
      </Switch>
    </Router>
  );
}

export default App;
