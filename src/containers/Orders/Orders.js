import React from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import actions from '../../store/actions/index';

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

const mapStateToProps = state=>{
    return {
        orders: state.order.orders,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);