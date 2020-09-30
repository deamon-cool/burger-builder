import React from 'react';
import config from '../../config-fetch';

import Order from '../../components/Order/Order';

class Orders extends React.Component {
    state = {
        orders: [],
        loading: true
    };

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price} />
                ))}
            </div>
        );
    }
}

export default Orders;