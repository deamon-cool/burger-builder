import React from 'react';
import config from '../../config-fetch';

import Order from '../../components/Order/Order';

class Orders extends React.Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        const init = {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch(config.url + 'orders.json', init)
            .then(res => res.json())
            .then(data => {
                const fetchedOrders = [];
                for (let key in data) {
                    fetchedOrders.push({
                        ...data[key],
                        id: key
                    });
                }

                this.setState({
                    loading: false,
                    orders: fetchedOrders
                });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

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