const authDefaultState = {
    email: '',
    password: '',
    error: '',
    loading: false,
    user: {}
};

export default (state = authDefaultState, action) => {

    switch(action.type) {
        case "EMAIL_UPDATED":
            return {
                ...state,
                email: action.text
            };

        case "PASSWORD_UPDATED":
            return {
                ...state,
                password: action.text
            };

        case "LOGIN_SUCCESS":
            return {
                ...state,
                email: '',
                password: '',
                loading: false,
                error: '',
                user: action.user
            };

        case "LOGIN_ERROR":
            return {
                ...state,
                error: action.error,
                loading: false
            };

        case "AUTH_LOADING":
            return {
                ...state,
                loading: true
            }

        default:
            return state;

    }
};