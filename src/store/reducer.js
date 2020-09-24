import * as actionTypes from './actions';

const initState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
};

const INGREDIENT_PRICES = {
    salad: 0.3,
    cheese: 0.7,
    meat: 1.4,
    bacon: 0.8
}

const reducer = (state = initState, action) => {
    console.log('reducer')
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            };
        default:
            return state;
    }
};

export default reducer;