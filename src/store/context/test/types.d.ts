interface AuthContextState {
    isAuth: boolean,
    token: string | null,
    email: string,
}
interface AuthContextValues {
    authState: AuthContextState;
    signupAction: (args: Params) => void;
    signinAction: (args: Params) => void;
    signoutAction: () => void;
}