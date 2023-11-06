import { CHECK_AUTH, SIGN_IN, SIGN_OUT, SIGN_UP } from "./constant";

const reducer = (state: AuthContextState, action: DispatchProps): AuthContextState => {
    switch (action.type) {
        case CHECK_AUTH:
            return {
                ...state,
                isAuth: action.payload?.isAuth ?? false,
            };
        case SIGN_OUT:
            return { ...state, token: null, email: '' };
        case SIGN_IN:
        case SIGN_UP:
            return {
                ...state,
                token: action.payload?.token || null,
                email: action.payload?.email || '',
            };
        default:
            return initialState;
    }
};

export default reducer