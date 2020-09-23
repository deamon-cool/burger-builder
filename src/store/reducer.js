import { act } from 'react-dom/test-utils';
import * as actionTypes from './actions';

const initState = {
    ingredients: null,
    totalPrice: 4,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {

            };
        case actionTypes.REMOVE_INGREDIENT:
            return {

            };
        default:
            return state;
    }
};

export default reducer;