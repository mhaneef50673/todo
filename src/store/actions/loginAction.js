import { createAction } from './index';
import { LOGIN, LOGIN_ERROR, IS_AUTHENTICATING, LOGOUT, LOCAL_STORAGE_KEY } from '../../constants';
import { getLoginToken } from '../../core/api';

export function login(userid, password, history) {
  return (dispatch) => {
    dispatch(createAction(IS_AUTHENTICATING, {}));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userid, password })
    };

    /*fetch('https://reqres.in/api/login', requestOptions)
    .then((response) => {
      return response.json();
    })*/
    getLoginToken(requestOptions)
    .then((results) => {
      if(results && results.token) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(results.token));
        dispatch(createAction(LOGIN, {
          token: results.token,
        }))
        history.push('/home');
      } else {
        dispatch(createAction(LOGIN_ERROR, {}))
      }
    })
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(createAction(LOGOUT, {}));
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
}