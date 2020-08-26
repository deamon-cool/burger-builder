import React from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            meat: 1,
            bacon: 1
        }
    };

    checkoutCancellHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    onCheckoutCancelled={this.props.checkoutCancellHandler}
                    onCheckoutContinued={this.props.checkoutContinueHandler}
                    ingredients={this.state.ingredients} />
            </div>
        );
    }
}

export default Checkout;