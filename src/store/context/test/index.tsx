import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer
} from 'react';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from './constant';
import reducer from './reducer';

// Create context
export const AuthContext = createContext<AuthContextValues | undefined>(undefined);

// ! Global initial-state
const initialState: AuthContextState = {
  isAuth: false,
  token: null,
  email: '',
};


export const AuthProvider = ({ children }: PropsWithChildren) => {

  const [authState, dispatch] = useReducer(reducer, initialState);

  /* Global Auth Actions */
  const actions = {
    signupAction: ({ email, password }: Params) => {
      console.log('SIGN_UP==>');
      dispatch({
        type: SIGN_UP,
        payload: { email, password },
      });
    },

    signinAction: ({ email, password }: Params) => {
      console.log('SIGN_IN==>');
      dispatch({
        type: SIGN_IN,
        payload: {
          token: 'some access token here',
          email,
        },
      });
    },
    signoutAction: () => {
      console.log('SIGN_OUT==>');
      dispatch({ type: SIGN_OUT });
    },
  };
  return (
    <AuthContext.Provider value={{ authState, ...actions }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
