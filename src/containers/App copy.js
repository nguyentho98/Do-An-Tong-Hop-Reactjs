import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import { PrivateRoute } from './../components/privateroute/index';
import { history } from './../reducers/history';
import Login from '../components/login/index';
import Register from '../components/register/index';
import DetailContainer from '../containers/DetailContainer';
import SreachContainer from '../containers/SreachContainer';
import HomePage from './../containers/HomePage';
import CartContainer from './../containers/CartContainer';
import PTTTContainer from './../containers/PTTTContainer';
import CSBHContainer from './../containers/CSBHContainer';
import InfoUserContainer from './../containers/InfoUserContainer';
import HDMHContainer from './../containers/HDMHContainer';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path='/'
          exact={true}
          component={() => <HomePage />}
        />
        <Route
          path='/login'
          exact={false}
          component={() => <Login />}
        />
        <Route
          path='/register'
          exact={false}
          component={() => <Register />}
        />
        <Route
          path='/product/:id'
          exact={false}
          component={({ match }) => <DetailContainer match={match} />}
        />
        <Route
          path='/info/:stt'
          exact={false}
          component={({ match }) => <InfoUserContainer match={match} />}
        />
        <Route
          path='/sreach'
          exact={false}
          component={() => <SreachContainer />}
        />
        <Route
          path='/cart'
          exact={false}
          component={() => <CartContainer />}
        />
        <Route
          path='/phuongthucthanhtoan'
          exact={false}
          component={() => <PTTTContainer />}
        />
        <Route
          path='/chinhsachbaohanh'
          exact={false}
          component={() => <CSBHContainer />}
        />
        <Route
          path='/huongdanmuahang'
          exact={false}
          component={() => <HDMHContainer />}
        />
      </Switch>
    </Router>
  );
}

export default App;
