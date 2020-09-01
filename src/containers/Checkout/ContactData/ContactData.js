import React from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import config from '../../../config-fetch';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

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
            price: this.props.price,
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
            .then(res => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <Input inputtype='input' type='text' name='name' placeholder='Name' />
                <Input inputtype='input' type='email' name='email' placeholder='Email' />
                <Input inputtype='input' type='text' name='street' placeholder='Street' />
                <Input inputtype='input' type='text' name='postal' placeholder='Postal Code' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h1>Enter your Contact</h1>
                {form}
            </div>
        );
    }
}

export default ContactData;