import React from 'react';
import { BrowserRouter } from 'react-router-dom';

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
            <Checkout />
          </Lauout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
