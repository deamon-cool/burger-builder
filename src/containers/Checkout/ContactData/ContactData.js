import React from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h1>Enter your Contact</h1>
                <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Name' />
                    <input className={classes.Input} type='email' name='email' placeholder='Email' />
                    <input className={classes.Input} type='text' name='street' placeholder='Street' />
                    <input className={classes.Input} type='text' name='postal' placeholder='Postal Code' />
                    <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;