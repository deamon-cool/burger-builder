import React from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            meat: 1,
            bacon: 1
        }
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }

        this.setState({ ingredients: ingredients });
    }

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
                    onCheckoutCancelled={this.checkoutCancellHandler}
                    onCheckoutContinued={this.checkoutContinueHandler}
                    ingredients={this.state.ingredients} />
                <Route path={this.props.match.url + '/contact-data'} component={ContactData} />
            </div>
        );
    }
}

export default Checkout;