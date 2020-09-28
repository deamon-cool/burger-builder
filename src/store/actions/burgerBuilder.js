import * as actionTypes from './actionTypes';
import config from '../../config-fetch';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredinet = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
}

export const setIngredient = (ingedients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingedients
    };
}

export const fetchInitIngredient = () => {
    return dispatch => {
        const init = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(config.url + 'ingredients.json', init)
            .then(res => res.json())
            .then(data => {
                dispatch(setIngredient(data));
            }).catch(err => {

            });
    };
};