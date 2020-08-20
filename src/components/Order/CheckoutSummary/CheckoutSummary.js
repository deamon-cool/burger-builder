import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className=''>
            <h1>We hope it tastest well !</h1>
            <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType='Danger'
                clicked>CANCEL</Button>
            <Button
                btnType='Success'
                clicked>cONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;