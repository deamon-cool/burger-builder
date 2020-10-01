import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4NOAuGRsfAEm27jdqQkNFEcWWxiG_EzM';

        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4NOAuGRsfAEm27jdqQkNFEcWWxiG_EzM'
        }

        const init = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authData)
        };

        fetch(url, init)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.error) {
                    dispatch(authFail(data.error));
                } else {
                    dispatch(authSuccess(data.idToken, data.localId));
                }
            }).catch(err => {
                dispatch(authFail(err));
            });
    };
};