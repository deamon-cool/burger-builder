import React from 'react';
import Lauout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Lauout>
        <BurgerBuilder />
      </Lauout>
    </div>
  );
}

export default App;
