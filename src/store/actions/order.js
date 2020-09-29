import * as actionTypes from './actionTypes';
import config from '../../config-fetch';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        const init = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        };

        fetch(config.url + 'orders.json', init)
            .then(res => {
                console.log(res.data);
                dispatch(purchaseBurgerSuccess(res.data, orderData));
            })
            .catch(err => {
                dispatch(purchaseBurgerFail(err));
            });
    };
};