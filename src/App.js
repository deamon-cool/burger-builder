import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Lauout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Lauout>
            <Route path='/' exact component={BurgerBuilder} />
          </Lauout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
