import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailUpdated = (text) => ({
    type: 'EMAIL_UPDATED',
    text
});

export const passwordUpdated = (text) => ({
    type: 'PASSWORD_UPDATED',
    text
});

export const loginSuccess = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    };
};

export const loginError = (message) => {
    return {
        type: 'LOGIN_ERROR',
        error: message
    };
}

export const authLoading = () => {
    return {
        type: 'AUTH_LOADING'
    };
}

export const loginUser = ({ email, password }) => {

    return (dispatch) => {

        dispatch(authLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            
            .then((user) => {
                dispatch(loginSuccess(user));
                Actions.main();
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => {
                        dispatch(loginSuccess(user));
                        Actions.players();
                    })
                    .catch((err) => {
                        dispatch(loginError(err.message));
                    })
            });
    };
};