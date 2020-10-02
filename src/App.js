import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Lauout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

function App() {
  return (
    <div>
      <Lauout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/auth' component={Auth} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={BurgerBuilder} />
        </Switch>
      </Lauout>
    </div>
  );
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);