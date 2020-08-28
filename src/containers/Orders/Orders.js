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
                console.log(data);
                this.setState({ loading: false });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default Orders;