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

    render() {
        return (
            <div className={classes.ContactData}>
                <h1>Enter your Contact</h1>
                <form>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='email' name='email' placeholder='Email' />
                    <input type='text' name='street' placeholder='Street' />
                    <input type='text' name='postal' placeholder='Postal Code' />
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;