import React from 'react';
import Aux from '../../high-order-components/Auxiliary';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends React.Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;