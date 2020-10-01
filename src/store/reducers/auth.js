import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return {

            };
        case actionTypes.AUTH_FAIL:
            return {

            };
        default:
            return state;
    }
};

export default reducer;