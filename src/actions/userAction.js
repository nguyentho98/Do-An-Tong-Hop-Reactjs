import * as types from '../constants/ActionTypes';
import * as action from './alertAction';
import { history } from './../reducers/history';
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

export function requestGetAll() {
  return {
    type: types.GETALL_REQUEST,
   
  }
}

export function successGetAll(users) {
  return {
    type: types.GETALL_SUCCESS,
    users
  }
}

export function failureGetAll(error) {
  return {
    type: types.GETALL_FAILURE,
    error
  }
}
export function getAll() {
  return (dispatch) => {
    dispatch(requestGetAll())
    fetch('http://localhost:1337/Logins', {
      method: 'GET',
        }).then(response => {
              return response.json()
        }).then(json => {    
          dispatch(successGetAll(json))  
      })
      .catch((data) => {
        // dispatch(action.error("Username đã tồn tại,vui lòng thử lại"));
       
      })
  }
}

export function requestRegister(user) {
  return {
    type: types.REGISTER_REQUEST,
    user
  }
}

export function successRegister(user) {
  return {
    type: types.REGISTER_SUCCESS,
    user
  }
}

export function failureRegister(error) {
  return {
    type: types.GETALL_FAILURE,
    error
  }
}
export function register(user) {
  return (dispatch) => {
    dispatch(requestRegister(user));
  axios
  .post('http://localhost:1337/auth/local/register', {
    username: user.username,
    email:user.email,
    password: user.password,
    fullname:user.fullname,
    phone:user.phone
  }).then(response => {
    // Handle success.
      history.push("/login");
      response.json().then( result => {
      dispatch(successRegister(result));})
      dispatch(action.success("Bạn tạo tài khoản thành công"));
  })
  .catch(error => { 
      // dispatch(action.error(error.message[0].messages[0].message));
      // console.log("xin chào "+JSON.stringify(error));
       dispatch(action.error("Username đã tồn tại,vui lòng thử lại"));
  });
 
  }
}

export function logout() {
  localStorage.removeItem('USER');
  return { type: types.LOGOUT };
}
