import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
}

export const removeIngredinet = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
}}

export const setIngredient = (ingedients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingedients
    };
}
