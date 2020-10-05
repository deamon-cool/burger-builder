import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

function Checkout(props) {
    const checkoutCancellHandler = () => {
        props.history.goBack();
    }

    const checkoutContinueHandler = () => {
        props.history.replace('/checkout/contact-data');
    }


    let summary = <Redirect to='/' />
    if (props.ings) {
        const purchasedRedirect = props.purchased ? <Redirect to='/' /> : null;
        summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary
                    onCheckoutCancelled={checkoutCancellHandler}
                    onCheckoutContinued={checkoutContinueHandler}
                    ingredients={props.ings} />
                <Route
                    path={props.match.url + '/contact-data'}
                    component={ContactData} />
            </div>
        );
    }

    return summary;
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

export default connect(mapStateToProps)(Checkout);