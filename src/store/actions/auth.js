import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        const init = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authData)
        };

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4NOAuGRsfAEm27jdqQkNFEcWWxiG_EzM', init)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(authSuccess(data));
            }).catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
        // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    };
};