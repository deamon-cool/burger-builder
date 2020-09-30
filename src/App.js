import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Lauout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <div>
      <Lauout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/auth' component={Auth} />
          <Route path='/' exact component={BurgerBuilder} />
        </Switch>
      </Lauout>
    </div>
  );
}

export default App;