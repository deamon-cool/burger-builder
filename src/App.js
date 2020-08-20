import React from 'react';

import Lauout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Lauout>
        <BurgerBuilder />
        <Checkout />
      </Lauout>
    </div>
  );
}

export default App;
