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
var optionAxios = {
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  }
}
// export function login(username, password) {
//   console.log(username+password);
//   return (dispatch) => {
//     dispatch(requestLogin())
//     axios
//     .post('http://doanekko.com:8080/public/customers/login', {
//       email: username,
//       password: password
//     },optionAxios)
//     .then(response => {
//       // Handle success.
//         // history.goBack()
//         console.log(response.data);
//         history.push('/')
//         dispatch(successLogin(response.data))  
//         localStorage.setItem('USER', JSON.stringify(response.data));
//     })
//     .catch(data => {
//       // Handle error.
//       dispatch(action.error("Email hoặc mật khẩu của bạn không chính xác !!!"));
     
//     });
//   }
// }
export function login(username, password) {
  return (dispatch) => {
     dispatch(requestLogin())
     fetch('http://doanekko.com:8080/public/customers/login' ,{
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
       },
      method: 'post',
      credentials: "same-origin",
        body:JSON.stringify({
          email: username,
          password: password,
        }),  
      }).then(response => {
            return response.json()
      }).then(json => {       
        if (json.error) {
          dispatch(action.error("Email hoặc mật khẩu của bạn không chính xác !!!"));
        } else{
          history.push('/')
          dispatch(successLogin(json))  
          localStorage.setItem('USER', JSON.stringify(json));
        }
      })
      .catch((err) => console.log('err:', err))
      }
}



export function logout() {
  localStorage.removeItem('USER');
  localStorage.removeItem('CART');
  return { type: types.LOGOUT };
}
