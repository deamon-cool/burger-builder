import React from 'react';
import { Link } from 'react-router-dom';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastest well !</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType='Danger'
                clicked={props.cancelHandler}>CANCEL</Button>
            <Button
                btnType='Success'
                clicked={props.continueHandler}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;