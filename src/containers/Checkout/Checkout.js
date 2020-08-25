import React from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import config from '../../config-fetch';
import Spinner from '../../components/UI/Spinner/Spinner';

class Checkout extends React.Component {
    state = {
        loading: false
    };

    cancelHandler = () => {
        this.props.history.push('/');
    }

    continueHandler = () => {
        this.setState({ loading: true });

        const init = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.props.location.state.order.ingredients)
        };

        fetch(config.url + 'orders.json', init)
            .then(res => { })
            .catch(err => { })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    render() {
        let checkoutSummary =
            <CheckoutSummary
                ingredients={this.props.location.state.order.ingredients}
                cancelHandler={this.cancelHandler}
                continueHandler={this.continueHandler} />;

        if (this.state.loading) {
            checkoutSummary = <Spinner />
        }

        return (
            <div>
                {checkoutSummary}
            </div>
        );
    }
}

export default Checkout;