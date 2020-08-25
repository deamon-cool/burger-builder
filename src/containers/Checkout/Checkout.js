import React from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import config from '../../config-fetch';

class Checkout extends React.Component {
    cancelHandler = () => {
        this.props.history.push('/');
    }

    continueHandler = () => {
        const init = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.props.location.state.order.ingredients)
        };

        fetch(config.url + 'orders.json', init)
            .then(res => { })
            .catch(err => { })
            .finally(() => {

            });

        // fetch(config.url + 'orders.json', init)
        //     .then(res => {})
        //     .catch(err => {
        //         this.setState({ errorPost: err })
        //     })
        //     .finally(() => {
        //         this.setState({
        //             loading: false,
        //             purchasing: false
        //         });
        //     });
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.location.state.order.ingredients}
                    cancelHandler={this.cancelHandler}
                    continueHandler={this.continueHandler} />
            </div>
        );
    }
}

export default Checkout;