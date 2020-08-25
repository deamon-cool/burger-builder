import React from 'react';
import { Route } from 'react-router-dom';

import Lauout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Lauout>
        <Route path='/' component={BurgerBuilder} />
        <Route path='/checkout' component={Checkout} />
      </Lauout>
    </div>
  );
}

export default App;
