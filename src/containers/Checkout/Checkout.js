import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {

    checkoutCancellHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to='/' />
        if (this.props.ings) {
            summary = (
                <div>
                    <CheckoutSummary
                        onCheckoutCancelled={this.checkoutCancellHandler}
                        onCheckoutContinued={this.checkoutContinueHandler}
                        ingredients={this.props.ings} />
                    <Route
                        path={this.props.match.url + '/contact-data'}
                        component={ContactData} />
                </div>
            );
        }

        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients
    }
};

export default connect(mapStateToProps)(Checkout);