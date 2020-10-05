import React from 'react';
import Aux from '../../../high-order-components/Auxiliary';
import Button from '../../UI/Button/Button';

function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your's Burger ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.purchasedContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default OrderSummary;