import React from 'react';
import Aux from '../../../high-order-components/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredinets)
        .map(igKey => {
            return (
                < li >
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: { props.ingredinets[igKey]}
                </li >
            );
        });


    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your's Burger ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;