import * as types from '../constants/ActionTypes';
import * as action from './alertAction';
import { history } from '../reducers/history';
import axios from 'axios';
export function requestLogin(user) {
  return {
    type: types.LOGIN_REQUEST,
    user
  }
}

export function successLogin(user) {
  return {
    type: types.LOGIN_SUCCESS,
    user
  }
}

export function failureLogin(error) {
  return {
    type: types.LOGIN_FAILURE,
    error
  }
}
export function login(username, password) {
  return (dispatch) => {
    dispatch(requestLogin())
    axios
    .post('http://localhost:1337/auth/local', {
      identifier: username,
      password: password,
    })
    .then(response => {
      // Handle success.
        history.push('/');
        dispatch(successLogin(response.data.user))  
        localStorage.setItem('USER', JSON.stringify(response.data.user));
    })
    .catch(data => {
      // Handle error.
      dispatch(action.error("Email hoặc mật khẩu của bạn không chính xác !!!"));
     
    });
  }
}




export function logout() {
  localStorage.removeItem('USER');
  return { type: types.LOGOUT };
}
