import { LOGIN, LOGIN_ERROR, IS_AUTHENTICATING, LOGOUT } from '../../constants';

const initialState = {
  token: '',
  error: false,
  isAuthenticating: false,
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        token: action.payload.token,
        isAuthenticating: false,
        error: false,
      });
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        token: '',
        error: true,
      });
    case IS_AUTHENTICATING:
      return Object.assign({}, state, {
        token: '',
        error: false,
        isAuthenticating: true,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        token: '',
        error: false,
        isAuthenticating: false,
      });
    default:
      return initialState;
  }
}

export default loginReducer;