import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Lauout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Lauout>
            <BurgerBuilder />
            <Route path='/checkout' component={Checkout} />
            {/* <Checkout /> */}
          </Lauout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
