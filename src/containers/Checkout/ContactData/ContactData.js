import React from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import config from '../../../config-fetch';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Der Damin',
                address: {
                    street: 'Street nr 1',
                    zipCode: '42211',
                    country: 'Albania'
                },
                email: 'test@test.com'
            },
            deliverMethod: 'fastest'
        }

        const init = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        };

        fetch(config.url + 'orders.json', init)
            .then(res => {})
            .catch(err => {
                this.setState({ errorPost: err })
            })
            .finally(() => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
            });
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